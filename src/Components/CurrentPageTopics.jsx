import React, { Fragment, useEffect } from 'react';
import CurrentPageSubTopics from './CurrentPageSubTopics';
import { Link } from 'react-scroll';

const CurrentPageTopics = ({ pageRoute, subContentToShow }) => {
    console.log(pageRoute);
    useEffect(()=>{},[pageRoute])
    return (
        <div className='w-[270px] h-[90vh] sticky top-16 z-10 flex items-center font-serif flex-col border-l-2 border-slate-200 p-5 overflow-x-hidden overflow-y-auto'>
            <h3 className='tracking-widest font-semibold text-xl font-sans underline mb-5'>CONTENT</h3>
            <div className='min-w-[180px] max-w-[250px]'>
                {
                    subContentToShow.map((subTopic) => (
                        <Fragment key={subTopic.id}>
                            <Link to={`${subTopic.topicHeading.replace(/\s+/g, '').toLowerCase()}`} smooth={true} duration={500}>
                                <p title={`${subTopic.topicHeading}`} className='text-zinc-700 text-lg font-sans text-left tracking-wider font-semibold truncate cursor-pointer'>{subTopic.topicHeading}</p>
                            </Link>
                            {
                                subTopic.subContents !== undefined ? <CurrentPageSubTopics pageRoute={subTopic.topi} content={subTopic.subContents} /> : ''
                            }
                        </Fragment>))
                }
            </div>
        </div>
    );
}

export default CurrentPageTopics;


{/* {
                    Array.isArray(subTopic.subContent) ?
                    subTopic.subContent.map((content)=>)
                    : ''
                } */}