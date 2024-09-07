import React, { useEffect, useState } from 'react';
import Navigation from '../Components/Navigation';
import Sidebar from '../Components/Sidebar';
import ContentAreaPage from '../Components/ContentAreaPage';
import SearchModal from '../Components/SearchModal';

const Documentation = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const openSearchModal = (e)=>{
        if(e.ctrlKey && e.key === 'q'){
            if(!isSearchOpen){
                setIsSearchOpen(true);
            }
        }else if(e.key === 'Escape'){
            if(isSearchOpen){
                setIsSearchOpen(false);
            }
        }
    }
    useEffect(()=>{
        document.addEventListener('keydown',openSearchModal);
        return ()=>{
            document.removeEventListener('keydown',openSearchModal);
        }
    },[isSearchOpen])
    return (
        <div className='min-h-[100vh] flex flex-col'>
            <Navigation isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen}/>
            <div id="except-nav" className={`flex ${isSearchOpen ? {/* Blur CSS needs to be written here */} : ''}`}>
                <Sidebar/>
                <ContentAreaPage/>
                {
                    isSearchOpen && <SearchModal setIsSearchOpen={setIsSearchOpen}/>
                }
            </div>
        </div>
    );
}

export default Documentation;
