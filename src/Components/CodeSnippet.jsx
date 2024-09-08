import { useEffect, useState } from 'react';
import { BsClipboard2, BsClipboard2CheckFill } from 'react-icons/bs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierLakesideDark, atelierLakesideLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {CodeBlock} from '@zendeskgarden/react-typography';

const CodeSnippet = ({code}) => {
    const [isCopied, setIsCopied] = useState(false);
    const copyCode = async()=>{
        try{
            await navigator.clipboard.writeText(code);
            setIsCopied(true);
        }catch(err){
            console.error("Failed to copy code",err);
        }
    }
    useEffect(()=>{
        setTimeout(()=>{
            setIsCopied(false);
        },2500)
    },[isCopied])
    return (
        <div className='flex flex-col'>
            <div className='h-fit p-2 flex items-end justify-between rounded-tl-md rounded-tr-md bg-[#E2E8F0]'>
                <span></span>
                {
                    isCopied ? <BsClipboard2CheckFill className="cursor-pointer"/>: <BsClipboard2 onClick={copyCode} className='cursor-pointer'/>
                }
            </div>
            <div className='max-h-[600px] overflow-y-auto bg-[#161B1D] rounded-bl-md rounded-br-md p-2'>
            {/* <SyntaxHighlighter language='javascript' style={atelierLakesideDark}>{code}</SyntaxHighlighter> */}
            <CodeBlock>{code}</CodeBlock>
            </div>
        </div>
    );
}

export default CodeSnippet;
