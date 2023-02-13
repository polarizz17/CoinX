import React from 'react'
import { Link } from 'react-router-dom'
import '../css/card.css'
import '../css/index.css'

const CoinCard = (props) => {
    return (
        <Link to={`/coins/${props.id}`}>
            <div className="card flex flex-col justify-center space-y-4 items-center w-56 px-10 m-5 xs:w-48 xs:m-3 sm:m-2 /*sm:px-12*/ lg:m-5 /*lg:px-14*/ hover:scale-[1.1] transform duration-500 ease-out cursor-pointer" >
                <img src={props.img} alt={props.name} className="w-20" />
                <h3 className='w-20 text-center'>{props.name}</h3>
                <p>{props.price? `${props.currencySymbol} ${props.price}`:"NA"}</p>
            </div>
        </Link>
    )
}

export default CoinCard