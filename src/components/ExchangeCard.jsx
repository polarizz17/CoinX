import React from 'react'
import '../css/card.css'
import '../css/index.css'

const ExchangeCard = (props) => {
    let imgUrl = props.img;
    let imgLarge = imgUrl.replace("small" , "large");
    return (

        <div className="card flex flex-col justify-center space-y-4 items-center w-56 px-14 m-5 xs:w-48 xs:m-3 sm:m-2 sm:px-12 lg:m-5 lg:px-14 hover:scale-[1.1] transform duration-500 ease-out cursor-pointer" >
            <a href={props.url} target="blank"><img src={imgLarge} alt={props.name} className="w-20" /></a>
            <a href={props.url} target="blank"><h3 className='w-20 text-center'>{props.name}</h3></a>
            <p>Rank-{props.rank}</p>
        </div>
    )
}

export default ExchangeCard