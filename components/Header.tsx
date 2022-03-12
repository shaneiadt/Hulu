import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'

import { HomeIcon, LightningBoltIcon } from '@heroicons/react/outline';

const Header = () => {
    return (
        <header>
            <div>
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
            </div>
            <Image
                className='object-contain flex-1'
                src='https://links.papareact.com/ua6'
                width={200}
                height={100}
            />
        </header>
    )
}

export default Header