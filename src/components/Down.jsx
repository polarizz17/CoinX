import React from 'react'


const Down = (props) => {
    return (
        <div className='flex items-center p-2'>
            <svg width="30" height="30" fill="#ff0000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m4.594 8.912 6.553 7.646a1.126 1.126 0 0 0 1.708 0l6.552-7.646c.625-.73.107-1.857-.854-1.857H5.447c-.961 0-1.48 1.127-.853 1.857Z"></path>
            </svg>
            <p className='text-red-600'>{`${props.down}%`}</p>
        </div>
    )
}

export default Down
