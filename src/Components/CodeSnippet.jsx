import { useEffect, useState } from "react";
import { BsClipboard2, BsClipboard2CheckFill } from "react-icons/bs";
import { CodeBlock } from "@zendeskgarden/react-typography";

const CodeSnippet = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy code", err);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  }, [isCopied]);
  return (
    <div className="flex flex-col w-full">
      <div className="h-fit max-w-[600px] p-2 flex rounded-tl-md justify-end rounded-tr-md bg-[#E2E8F0]">
        {isCopied ? (
          <BsClipboard2CheckFill className="cursor-pointer" />
        ) : (
          <BsClipboard2 onClick={copyCode} className="cursor-pointer" />
        )}
      </div>
      <div className="max-h-[600px] max-w-[600px] w-full overflow-auto bg-[#161B1D] rounded-bl-md rounded-br-md p-2">
        <CodeBlock className="w-full" size={"large"} language={"jsx"} isNumbered>{code}</CodeBlock>
      </div>
    </div>
  );
};

export default CodeSnippet;
