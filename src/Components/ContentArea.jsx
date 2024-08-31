import {v4 as uuidv4} from 'uuid';
import SubContentArea from './SubContentArea';
import CodeSnippet from './CodeSnippet';
import ReturnTable from './ReturnTable';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const ContentArea = ({ prev, next, docToShow }) => {
    const navigate = useNavigate();
    console.log(prev, next);
    return (
        <section className='w-full flex flex-col flex-1 gap-4 p-14'>
            <div className="flex flex-col gap-2 mb-6">
                <h1 id={docToShow.topicHeading.replace(/\s+/g, '').toLowerCase()} className="text-6xl font-bold"><span>{docToShow.topicHeading[0].toUpperCase()}</span>{docToShow.topicHeading.slice(1)}</h1>
                <p className="text-lg text-slate-600">{docToShow.initialPara}</p>
            </div>
            {
                docToShow.extraPara !== undefined ? <p className="text-md text-[#53565A]">{docToShow.extraPara}</p>
                    : ''
            }
            {
                docToShow.bulletPoints !== undefined ? <div className='flex flex-col gap-2'>{docToShow.bulletPoints.map((point)=>(
                    <div key={uuidv4()} className='flex gap-2 items-center'><span className='h-1.5 w-1.5 rounded-md bg-[#53565A]'></span><span className="text-[#53565A] text-md">{point}</span></div>
                ))}</div>  : ''
            }
            {
                /* Run the code to show how the code written below runs */
                docToShow.codeSnippet!==undefined ? 
                <div className='flex items-center justify-center'>                  
                    {/* docToShow.codeSnippet.needToRun ? {/* <CodeRunner/> */}
                    <CodeSnippet code={docToShow.codeSnippet.code}/>
                </div> : ''
            }
            {
                docToShow.subContents!==undefined ? <SubContentArea subDocument={docToShow.subContents}/> : ''
            }
            {
                docToShow.returnTable !== undefined ? <ReturnTable component={docToShow.topicHeading} table={docToShow.returnTable}/> : ''
            }
            <div className='flex items-center justify-between text-xl font-semibold'>
                {
                    prev===undefined ? <div></div> 
                    : <div onClick={()=> navigate(`/docs/${prev.toLowerCase()}`)} className='flex items-center gap-2 ml-3 transition-all cursor-pointer hover:ml-1 hover:gap-3'>
                    <FaAngleDoubleLeft/>
                    <p><span>{prev[0].toUpperCase()}</span><span>{prev.slice(1)}</span></p>
                </div>
                }
                {
                    next===undefined ? <div></div>
                    : <div onClick={()=> navigate(`/docs/${next.toLowerCase()}`)} className='flex items-center gap-2 mr-3 transition-all cursor-pointer hover:mr-1 hover:gap-3'>
                    <p><span>{next[0].toUpperCase()}</span><span>{next.slice(1)}</span></p>
                    <FaAngleDoubleRight/>
                </div>
                }
            </div>
        </section>
    );
}

export default ContentArea;
