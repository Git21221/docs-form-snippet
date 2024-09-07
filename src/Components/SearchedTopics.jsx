import React from 'react';
// import { FaMagnifyingGlass } from 'react-icons/fa6';
import { TfiFaceSad } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';

const SearchedTopics = ({setIsSearchOpen, subtopic}) => {
    const navigate = useNavigate();

    const gotoPage = ()=>{
        setIsSearchOpen(false);
        navigate(`/docs/${subtopic.toLowerCase()}`)
    }

    if(subtopic[0]==="-" && subtopic[subtopic.length-1]==="-"){
        return(
            <div className='flex flex-col items-center justify-center gap-4 '>
                <TfiFaceSad className='text-4xl '/>
                <span className='text-slate-400 text-2xl'>No result for <span className='font-bold text-black'>"{subtopic.slice(1,subtopic.length-1)}"</span></span>
            </div>
        )
    }
    return (
        <div className='px-5 py-3 rounded-md border-2 border-slate-500 text-slate-500 font-semibold text-lg text-center shadow-slate-600 shadow-inner cursor-pointer' onClick={gotoPage}>
            {subtopic}
        </div>
    );
}

export default SearchedTopics;
