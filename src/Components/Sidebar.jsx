import { useState, useEffect } from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { sidebarData } from "../Raw Data/sidebarData";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 1200);
      if (window.innerWidth > 1200) {
        setIsSidebarOpen(false); // Automatically close sidebar on larger screens
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div
        className={`w-[270px] ${
          isScreenSmall
            ? `fixed top-0 h-full left-0 z-20 bg-white transition-transform duration-300 ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : "h-[calc(100vh-4rem)] sticky top-16 z-10"
        } select-none flex flex-col border-r-2 border-slate-200 px-1.5 overflow-x-hidden whitespace-nowrap overflow-y-auto justify-between`}
      >
        <span>
          {isScreenSmall && (
            <div
              id="logo"
              className="px-6 py-4 text-zinc-800 text-2xl font-semibold italic cursor-pointer select-none"
              onClick={() => navigate("/")}
            >
              formSnippet
            </div>
          )}
          <hr />
          {sidebarData.map((data) => (
            <SidebarItems
              key={data.id}
              data={data}
              closeSidebar={closeSidebar}
            />
          ))}
        </span>

        {/* Sidebar Collapse Icon (only visible on small screens) */}
        {isScreenSmall && (
          <button
            onClick={toggleSidebar}
            className="text-3xl bg-white p-1 rounded mb-12 ml-2 cursor-pointer"
          >
            {isSidebarOpen ? <GoSidebarCollapse /> : <GoSidebarExpand />}
          </button>
        )}
      </div>

      {/* Sidebar Toggle Button for small screens */}
      {isScreenSmall && !isSidebarOpen && (
        <button
          className="fixed bottom-12 bg-white p-1 rounded left-3 z-20 text-3xl"
          onClick={toggleSidebar}
        >
          <GoSidebarExpand />
        </button>
      )}

      {/* Overlay (for smaller screens) */}
      {isScreenSmall && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
