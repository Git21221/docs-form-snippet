import React, { useState } from 'react';
import { sidebarData } from '../Raw Data/sidebarData';
import SearchedTopics from './SearchedTopics';

const SearchModal = ({setIsSearchOpen}) => {
    const [filteredTopics, setFilteredTopics] = useState([]);


    return (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[60%] border-2 border-slate-300 bg-slate-50 rounded-md flex flex-col z-10'>
            <div className="modal-header w-[100%] px-2 py-1 flex items-center justify-between border-b-2 border-slate-300">
                <span></span>
                <input type="text" className='search-section w-[50%] px-2 py-1 rounded-md text-black text-lg font-medium bg-slate-100 outline-none focus:bg-slate-200' placeholder='Search'/>
                <span className='close-modal text-lg font-semibold px-2 py-1 cursor-pointer rounded-md bg-slate-100 hover:bg-slate-200' onClick={()=>setIsSearchOpen(false)}>ESC</span>
            </div>
            <div className="topicsContainer p-2 h-fit">
                {
                    !filteredTopics.length ? 
                    sidebarData.length? 
                    sidebarData.map((data)=> data.subtopics.map((subtopic)=> <SearchedTopics subtopic={subtopic.subtopic}/>)):''
                    : filteredTopics.map((filteredTopic)=> <SearchedTopics subtopic={filteredTopic.subtopic}/>)
                }
            </div>
        </div>
    );
}

export default SearchModal;
