import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import CodeSnippet from './CodeSnippet';

const SubDocSubContent = ({ subDocument }) => {
    console.log(subDocument);
    return (
        <>
            {
                subDocument.map((subDoc) => (
                    <section key={uuidv4()} className='my-2 flex flex-col flex-1 gap-4'>
                        <div className="flex flex-col gap-2">
                            <h1 id={subDoc.topicHeading.replace(/\s+/g, '').toLowerCase()} className="text-2xl font-bold"><span>{subDoc.topicHeading[0].toUpperCase()}</span>{subDoc.topicHeading.slice(1)}</h1>
                            {
                                subDoc.initialPara!==undefined ?
                                <p className="text-md text-slate-600">{subDoc.initialPara}</p>:
                                ''
                            }
                        </div>
                        {
                            subDoc.extraPara !== undefined ? <p className="text-md text-[#53565A]">{subDoc.extraPara}</p>
                                : ''
                        }
                        {
                            subDoc.bulletPoints !== undefined ? <div className='flex flex-col gap-2'>{subDoc.bulletPoints.map((point) => (
                                <div key={uuidv4()} className='flex gap-2 items-center'><span className='h-1.5 w-1.5 rounded-md bg-[#53565A]'></span><span className="text-[#53565A] text-md">{point}</span></div>
                            ))}</div> : ''
                        }
                        {
                            /* Run the code to show how the code written below runs */
                            subDoc.codeSnippet !== undefined ?
                                <div className='flex items-center justify-center'>
                                    {/* docToShow.codeSnippet.needToRun ? {/* <CodeRunner/> */}
                                    <CodeSnippet code={subDoc.codeSnippet.code} />
                                </div> : ''
                        }
                    </section>
                ))
            }
        </>
    );
}

export default SubDocSubContent;
