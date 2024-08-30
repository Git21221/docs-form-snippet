import React from 'react';
import Navigation from '../Components/Navigation';
import Sidebar from '../Components/Sidebar';
import ContentAreaPage from '../Components/ContentAreaPage';

const Documentation = () => {
    return (
        <div className='min-h-[100vh] flex flex-col'>
            <Navigation/>
            <div id="except-nav" className='flex'>
                <Sidebar/>
                <ContentAreaPage/>
            </div>
        </div>
    );
}

export default Documentation;
