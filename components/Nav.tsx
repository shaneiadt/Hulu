import React from 'react'
import requests from '../utils/requests'

const Nav = () => {
    return (
        <nav>
            <div className='scrollbar-hide flex whitespace-nowrap space-x-10 px-10 sm:px-20 text-2xl sm:space-x-20 overflow-x-scroll'>
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2 className='last:pr-24 cursor-pointer transition duration-100 hover:scale-125 hover:text-white active:text-red-500' key={key}>{title}</h2>
                ))}
            </div>
        </nav>
    )
}

export default Nav