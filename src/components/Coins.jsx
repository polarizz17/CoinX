import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index';
import Loader from './Loader'
import CoinCard from './CoinCard'
import '../css/index.css'
import Error from './Error'
import Radio from './Radio';


const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const pre = "<<";
  const nex = ">>";

  const nextPage = () => {
    if (page < 124) {
      setLoading(true);
      setPage(page + 1);
    }
  }
  const previousPage = () => {
    if (page > 1) {
      setLoading(true);
      setPage(page - 1)
    }
  }
  const setPageNo = (pageNo) => {
    setLoading(true);
    setPage(pageNo);
  }
  const inputCurr = (e) => {
    setCurrency(e.target.value);
  }
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    };
    fetchCoins();
  }, [currency, page]);



  if (error) {
    return (
      <Error msg="Error while fatching the Coins" />
    )
  }

  return (
    <>
      <Radio curr={inputCurr}/>
      {loading ? <Loader /> : <>
        <div className='w-full flex flex-col justify-start items-center px-5 xs:flex-row xs:flex-wrap xs:justify-center'>
          {
            coins.map((i) => {
              return (
                <CoinCard key={i.market_cap_rank} name={i.name} img={i.image} sym={i.symbol} price={i.current_price} id={i.id} currencySymbol={currencySymbol} />
              )
            }
            )}
        </div>
      </>
      }
      <div className='flex justify-center items-center space-x-5 m-5'>
        <button className='bg-[#eab308]  text-white w-12 h-12 rounded-full hover:scale-[1.1] transform duration-500 ease-out cursor-pointer' onClick={previousPage}>{pre}</button>
        <div className='flex space-x-2'>
          <p className='text-lg text-gray-500 cursor-pointer' onClick={() => { setPageNo(page) }}>{page}</p>
          <p className='text-lg text-gray-500'>of</p>
          <p className='text-lg text-gray-500 cursor-pointer' onClick={() => { setPageNo(124) }}>124</p>
        </div>
        <button className='bg-[#eab308]  text-white w-12 h-12 rounded-full hover:scale-[1.1] transform duration-500 ease-out cursor-pointer' onClick={nextPage}>{nex}</button>
      </div>
    </>
  )
}

export default Coins
