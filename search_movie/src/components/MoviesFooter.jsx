import React from 'react';
import { FaChevronLeft,FaChevronRight } from 'react-icons/fa';

const MoviesFooter = ({setIndexes,startIndex,endIndex,moviesCount}) => {

    return (
        <div className='moviesFoter'>
            <div className="btnWrapper">
            <button className='paginationBtn' disabled={!startIndex} onClick={()=>setIndexes('prev')}><FaChevronLeft/></button>
            <button className='paginationBtn' disabled={moviesCount<=endIndex}  onClick={()=>setIndexes('next')}><FaChevronRight/></button>
            </div>
        </div>
    )
}

export default MoviesFooter

