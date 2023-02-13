import React from 'react'

const Up = (props) => {
    return (
        <div className='flex items-center p-2'>
            <svg width="30" height="30" fill="#86efac" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m19.406 15.094-6.552-7.647a1.125 1.125 0 0 0-1.709 0l-6.552 7.647c-.625.73-.107 1.857.854 1.857h13.107c.96 0 1.479-1.128.852-1.857Z"></path>
            </svg>
            <p className='text-green-500'>{`${props.up}%`}</p>
        </div>
    )
}

export default Up
