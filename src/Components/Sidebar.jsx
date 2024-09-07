import { sidebarData } from "../Raw Data/sidebarData";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
    return (
        <div className='w-[270px] h-screen sticky top-16 z-10 flex flex-col border-r-2 border-slate-200 px-1.5 overflow-x-hidden whitespace-nowrap overflow-y-auto'>
            {
                sidebarData.map((data)=><SidebarItems key={data.id} data={data}/>)
            }
        </div>
    );
}

export default Sidebar;
