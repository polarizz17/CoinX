import React from 'react'
import '../css/loader.css'
import '../css/index.css'

const Loader = () => {
    return (
        <><div className="w-[100vw] h-[80vh] flex justify-center items-center">
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            </div>
        </>
    )
}

export default Loader
