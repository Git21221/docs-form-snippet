import React from 'react';
import { useParams } from 'react-router-dom';
import CurrentPageTopics from './CurrentPageTopics';
import ContentArea from './ContentArea';
import { contentAreaData } from '../Raw Data/contentAreaData';

const ContentAreaPage = () => {
    const {docTopic} = useParams();
    const docToShow = contentAreaData.filter((data)=> data.topicHeading===docTopic);
    return(
        (!docToShow.length) ? ( 
        <div className='w-full min-h-[90vh] flex flex-1'> 
        <ContentArea docToShow={contentAreaData[0]}/>
        <CurrentPageTopics pageRoute={contentAreaData[0].topicHeading} subContentToShow={contentAreaData[0].subContents}/>
        </div>)
        : ( 
        <div className='w-full min-h-[90vh] flex flex-1'>
        <ContentArea docToShow={docToShow[0]}/>
        <CurrentPageTopics pageRoute={docToShow[0].topicHeading} subContentToShow={docToShow[0].subContents}/>
        </div>)
    );
}

export default ContentAreaPage;