import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { server } from '..';
import Error from './Error'
import Down from './Down';
import Up from './Up';
import '../css/coindetails.css'
import '../css/index.css'
import PriceChart from './PriceChart.jsx';
import Radio from './Radio';

const CoinDetails = () => {

  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const inputCurr = (e) => {
    setCurrency(e.target.value);
  }

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const params = useParams();

  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

  const switchChartStats = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7d":
        setDays("7d");
        setLoading(true);
        break;
      case "14d":
        setDays("14d");
        setLoading(true);
        break;
      case "30d":
        setDays("30d");
        setLoading(true);
        break;
      case "60d":
        setDays("60d");
        setLoading(true);
        break;
      case "200d":
        setDays("200d");
        setLoading(true);
        break;
      case "1y":
        setDays("365d");
        setLoading(true);
        break;
      case "max":
        setDays("max");
        setLoading(true);
        break;

      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  };

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);

        const { data: chartData } = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);

        setCoin(data);
        setChartArray(chartData.prices);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    };
    fetchCoin();
  }, [params.id, currency, days]);

  if (error) {
    return (
      <Error msg="Error while fatching the Coin" />
    )
  }

  return (
    <>
      <Radio curr={inputCurr}/>
      {loading ? <Loader /> : <>
        <div className='p-5 sm:p-10'>
          <PriceChart arr={chartArray} currency={currencySymbol}
            days={days}
          />
        </div>
        <div className='flex justify-center '>
          {loading ? <Loader /> :
            btns.map((i) => {
              return (<button key={i} onClick={() => switchChartStats(i)} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-[0.5rem] px-2 py-2.5 mr-1 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 xs:text-sm xs:px-3 xs:mr-2 sm:text-sm sm:px-5 sm:mr-3">{i}</button>)
            })
          }
        </div>

        <div className='flex flex-col items-center space-y-1' >
          <p className='m-5'>{Date(coin.market_data.last_updated).split("G")[0]}</p>
          <img src={coin.image.large} alt="" className='w-32 h-32' />
          <p className='text-2xl font-semibold'>{coin.name}</p>
          <p className='text-md'>{currencySymbol}{coin.market_data.current_price[currency]}</p>
          <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900
           dark:text-green-300">{`#${coin.market_cap_rank}`}</span>
          {coin.market_data.price_change_percentage_24h > 0 ? <Up up={coin.market_data.price_change_percentage_24h} /> : <Down down={coin.market_data.price_change_percentage_24h} />}
          <div className='w-[80vw] h-2 flex'>
            <div className=' bg-green-700 w-1/2'></div>
            <div className=' bg-gray-200 w-1/2'></div>
          </div>
          <div className='flex justify-between w-[80vw] pt-1'>
            <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 rounded dark:bg-red-900 dark:text-red-300">{`${currencySymbol}${coin.market_data.low_24h[currency]}`}</span>
            <p>24h Range</p>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-auto rounded dark:bg-green-900 dark:text-green-300">{`${currencySymbol}${coin.market_data.high_24h[currency]}`}</span>
          </div>
          <div className='flex justify-between w-[80vw] pt-5 sm:text-xl' id='BebasNeue'>
            <div className='flex flex-col space-y-2' >
              <p className=''>Max Supply</p>
              <p className=''>Circulating Supply</p>
              <p className=''>Market Cap</p>
              <p className=''>All Time Low</p>
              <p className=''>All Time High</p>
            </div>
            <div className='flex flex-col space-y-2 items-end'>
              <p className=''>{coin.market_data.max_supply}</p>
              <p className=''>{coin.market_data.circulating_supply}</p>
              <p className=''>{`${currencySymbol} ${coin.market_data.market_cap[currency]}`}</p>
              <p className=''>{`${currencySymbol} ${coin.market_data.atl[currency]}`}</p>
              <p className=''>{`${currencySymbol} ${coin.market_data.ath[currency]}`}</p>
            </div>
          </div>
        </div>
      </>}
    </>
  )
}

export default CoinDetails
