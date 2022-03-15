import { useRouter } from 'next/router'
import React from 'react'
import requests from '../utils/requests'

const Nav = () => {
    const router = useRouter();

    return (
        <nav className='relative'>
            <div className='scrollbar-hide flex whitespace-nowrap space-x-10 px-10 sm:px-20 text-2xl sm:space-x-20 overflow-x-scroll'>
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2
                        onClick={() => router.push(`/?genre=${key}`)}
                        className='last:pr-24 cursor-pointer transition duration-100 hover:scale-125 hover:text-white active:text-red-500' key={key}>{title}</h2>
                ))}
            </div>
            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
            <div className='absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-10 w-1/12' />
        </nav>
    )
}

export default Nav