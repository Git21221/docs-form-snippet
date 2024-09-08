import React, { forwardRef, useEffect, useState } from 'react';
import { sidebarData } from '../Raw Data/sidebarData';
import SearchedTopics from './SearchedTopics';

const SearchModal = forwardRef(({setIsSearchOpen}, ref) => {
    const [filteredTopics, setFilteredTopics] = useState([]);
    const [topicsToSearch, setTopicsToSearh] = useState([]);
    const [inputVal, setInputVal] = useState('');

    const filterTopic = (e)=>{
        const serchedText = e.target.value;
        setInputVal(serchedText);
        const topicToShow = topicsToSearch.filter((topic)=> topic.toLowerCase().includes(serchedText.toLowerCase()));
        if(topicToShow.length){
            setFilteredTopics(topicToShow);
        }else{
            const notFoundString = "-"+e.target.value+"-";
            setFilteredTopics([notFoundString]);
        }
    }
    
    useEffect(()=>{
        const res = [];
        sidebarData.forEach((data)=> 
            data.subtopics.forEach((topic)=> res.push(topic.subtopic)))
        if(ref && ref.current){
            ref.current.focus();
        }
        setTopicsToSearh(res);
    },[])

    return (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-96 border-2 border-slate-300 bg-slate-50 rounded-md flex flex-col z-10'>
            <div className="modal-header w-[100%] p-2 flex items-center justify-between border-b-2 border-slate-300">
                <span></span>
                <input ref={ref} type="text" className='search-section w-[50%] px-2 py-1 rounded-md text-black text-lg font-medium bg-slate-100 outline-none shadow-slate-600 shadow-inner focus:bg-slate-200' placeholder='Search' value={inputVal} onChange={(e)=>filterTopic(e)}/>
                <span className='close-modal text-sm font-semibold px-2 py-1 cursor-pointer rounded-md bg-slate-100 shadow-sm shadow-slate-600 hover:bg-slate-200' onClick={()=>setIsSearchOpen(false)}>ESC</span>
            </div>
            <div className={`topicsContainer p-3 h-full overflow-y-auto ${filteredTopics.length===1 ? 'flex items-center justify-center': 'grid grid-cols-3 grid-rows-5 gap-3'}`}>
                {
                    !filteredTopics.length ? 
                    sidebarData.length? 
                    sidebarData.map((data)=> data.subtopics.map((subtopic,index)=> <SearchedTopics setIsSearchOpen={setIsSearchOpen} key={index} subtopic={subtopic.subtopic}/>)):''
                    : filteredTopics.map((filteredTopic,index)=> <SearchedTopics setIsSearchOpen={setIsSearchOpen} key={index} subtopic={filteredTopic}/>)
                }
            </div>
        </div>
    );
});

export default SearchModal;
