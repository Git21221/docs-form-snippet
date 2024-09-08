import { useNavigate } from "react-router-dom";


const SidebarSubItems = ({subtopic}) => {
    // console.log(subtopic);
    const navigate = useNavigate();
    return (
        <div className="p-1.5 font-medium text-zinc-500 text-md cursor-pointer rounded-md shadow-inner shadow-slate-100 border-2 border-slate-100 hover:bg-slate-50 " onClick={()=> navigate(`/docs/${subtopic.toLowerCase()}`)}>
            <p className="truncate" title={subtopic}>
                {subtopic}
            </p>
        </div>
    );
}

export default SidebarSubItems;
