import Image from 'next/image';
import React from 'react'
import { Result } from '../utils/requests';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/';

const Thumbnail: React.FC<{ result: Result }> = ({ result: { title, poster_path, backdrop_path } }) => {
    return (
        <div>
            <Image
                layout='responsive'
                src={`${BASE_IMG_URL}${backdrop_path || poster_path}`}
                height={1080}
                width={1920}
            />
        </div>
    )
}

export default Thumbnail;