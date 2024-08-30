import { useState } from "react";
import SidebarSubItems from "./SidebarSubItems";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'


const SidebarItems = ({ data }) => {
    const { topic, subtopics } = data;
    const [showSubtopics, setShowSubtopics] = useState(false); 
    return (
        <div className=" flex flex-col h-max ">
            <div className={`px-1.5 py-0.5 mt-1.5 font-semibold rounded-md flex items-center justify-between text-zinc-700 text-lg overflow-hidden text-ellipsis cursor-pointer hover:bg-slate-200`} onClick={()=> setShowSubtopics(!showSubtopics)}>
                <h1 className="truncate pt-1" title={topic}>
                    {topic}
                </h1>
                {
                    showSubtopics ? <FaAngleUp/> : <FaAngleDown/>
                }
            </div>
            <div className='flex flex-col pl-2'>
                {
                    showSubtopics ?
                    subtopics.map((subtopic) => <SidebarSubItems key={subtopic.id} subtopic={subtopic.subtopic} />)
                    : ''
                }
            </div>
        </div>
    );
}

export default SidebarItems;
