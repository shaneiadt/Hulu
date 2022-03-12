import React from 'react'

interface IHeaderItemProps {
    title: string;
    Icon(props: React.ComponentProps<'svg'>): JSX.Element
}

const HeaderItem: React.FC<IHeaderItemProps> = ({ title, Icon }) => {
    return (
        <div className='group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white'>
            <Icon className='h-8 mb-1' />
            <p className='opacity-100 tracking-widest group-hover:opacity-100'>{title}</p>
        </div>
    )
}

export default HeaderItem