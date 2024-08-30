import React from 'react';
import { Link } from 'react-scroll';

const CurrentPageSubTopics = ({ pageRoute, content }) => {
    return (
        <div className='flex flex-col overflow-hidden px-2.5 truncate'>
            {
                content.map((topic) =>
                    <Link to={`${topic.topicHeading.replace(/\s+/g, '').toLowerCase()}`} smooth={true} duration={500}>
                        <span key={topic.id} title={`${topic.topicHeading}`} className='text-md text-slate-600 font-sans text-right cursor-pointer'>{topic.topicHeading}</span>
                    </Link>)
            }
        </div>
    )
};

export default CurrentPageSubTopics;
