import React from 'react';
import { scrollToPos } from '../utils';
const CurrentPageSubTopics = ({ content }) => {
    return (
        <div className='flex flex-col overflow-hidden px-2.5 truncate'>
            {
            content.map((topic) =>
                    <span onClick={()=>scrollToPos(`${topic.topicHeading.replace(/\s+/g, '').toLowerCase()}`)} key={topic.id} title={`${topic.topicHeading}`} className='text-md text-slate-600 font-sans text-right cursor-pointer'>{topic.topicHeading}</span>
                )
            }
        </div>
    )
};

export default CurrentPageSubTopics;
