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
        <ContentArea prev={undefined} next={contentAreaData.length===1 ? undefined : contentAreaData[1].topicHeading} docToShow={contentAreaData[0]}/>
        <CurrentPageTopics subContentToShow={contentAreaData[0].subContents}/>
        </div>)
        : ( 
        <div className='w-full min-h-[90vh] flex flex-1'>
        <ContentArea prev={docToShow[0].index > 0  ? contentAreaData[docToShow[0].index-1].topicHeading : undefined} next={docToShow[0].index===contentAreaData.length-1 ? undefined : contentAreaData[docToShow[0].index+1].topicHeading} docToShow={docToShow[0]}/>
            {
                docToShow[0].subContents?<CurrentPageTopics subContentToShow={docToShow[0].subContents}/>:''
            }
        </div>)
    );
}

export default ContentAreaPage;