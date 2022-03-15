import React from 'react'
import { Result } from '../utils/requests';
import Thumbnail from './Thumbnail';

interface IResultsProps {
    results: Result[];
}

const Results: React.FC<IResultsProps> = ({ results }) => {
    return (
        <div>
            {results.map(result => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </div>
    )
}

export default Results;