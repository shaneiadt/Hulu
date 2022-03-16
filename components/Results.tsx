import React from 'react'
import FlipMove from 'react-flip-move';

import { Result } from '../utils/requests';
import Thumbnail from './Thumbnail';

interface IResultsProps {
    results: Result[];
}

const Results: React.FC<IResultsProps> = ({ results }) => {
    return (
        <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {results.map(result => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </FlipMove>
    )
}

export default Results;