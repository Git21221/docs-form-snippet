import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import SubDocSubContent from './SubDocSubContent';
import CodeSnippet from './CodeSnippet';

const SubContentArea = ({ subDocument }) => {
    return (
        <>
            {
                subDocument.map((subDoc) => (
                    <section key={uuidv4()} className='my-2 flex flex-col flex-1 gap-4'>
                        <div className="flex flex-col gap-2">
                            <h1 id={subDoc.topicHeading.replace(/\s+/g, '').toLowerCase()} className="text-4xl font-bold"><span>{subDoc.topicHeading[0].toUpperCase()}</span>{subDoc.topicHeading.slice(1)}</h1>
                            {
                                subDoc.initialPara!==undefined ? 
                                <p className="text-md text-slate-600">{subDoc.initialPara}</p> : ''
                            }
                        </div>
                        {
                            subDoc.extraPara !== undefined ? <p className="text-md text-[#53565A]">{subDoc.extraPara}</p>
                                : ''
                        }
                        {
                            subDoc.bulletPoints !== undefined ? <ul className="ml-6 text-[#53565A] text-md list-disc">{subDoc.bulletPoints.map((point) => (
                                <li key={uuidv4()} className='pl-2'>{point}</li>
                            ))}</ul> : ''
                        }
                        {
                            /* Run the code to show how the code written below runs */
                            subDoc.codeSnippet !== undefined ?
                                <div className='flex items-center justify-center'>
                                    {/* docToShow.codeSnippet.needToRun ? {/* <CodeRunner/> */}
                                    <CodeSnippet code={subDoc.codeSnippet.code} />
                                </div> : ''
                        }
                        {
                            subDoc.subContents !== undefined ? <SubDocSubContent subDocument={subDoc.subContents} /> : ''
                        }
                    </section>
                ))
            }
        </>
    );
}

export default SubContentArea;
