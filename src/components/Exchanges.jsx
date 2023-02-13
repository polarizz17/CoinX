import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index';
import Loader from './Loader'
import ExchangeCard from './ExchangeCard'
import '../css/index.css'
import Error from './Error'

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges?per_page=100`);
        setExchanges(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    };
    fetchExchanges();
  }, []);



  if(error){
    return (
      <Error msg="Error while fatching the exchanges"/>
    )
  }

  return (
    <>
      {loading ? <Loader /> : <>
        <div className='w-full flex flex-col justify-start items-center px-5 xs:flex-row xs:flex-wrap xs:justify-center'>
          {
            exchanges.map((i) => {
              return (
                <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url} />
              )
            }
            )}
        </div>
      </>}
    </>
  )
}

export default Exchanges
