import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaMagnifyingGlass } from "react-icons/fa6";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const Navigation = ({ isSearchOpen, setIsSearchOpen }) => {
  const [theme, setTheme] = useState(true);
  const navigate = useNavigate();
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div className="h-16 flex items-center p-6 justify-between border-b-2 border-slate-200 sticky top-0 z-10 bg-white">
      <div
        id="logo"
        className="text-zinc-800 text-2xl font-semibold italic cursor-pointer select-none"
        onClick={() => navigate("/")}
      >
        formSnippet
      </div>
      <div
        id="searchbar"
        className={`w-64 h-11 rounded-full flex items-center justify-between p-2 cursor-pointer select-none shadow-slate-600 shadow-inner bg-slate-100 ${
          isSearchOpen ? "opacity-0" : ""
        }`}
        onClick={() => setIsSearchOpen(true)}
      >
        <FaMagnifyingGlass className="text-slate-600" />
        <span className="text-slate-600 font-medium">Search</span>
        <span className="font-bold bg-white p-1 text-[12px] rounded-full">
          Ctrl + Q
        </span>
      </div>
      <div id="others">
        <div className="text-black text-2xl font-bold flex gap-5">
          <Link to="https://github.com/Git21221/form-snippet" target="_blank">
            <FaGithub className="cursor-pointer" />
          </Link>
          {theme ? (
            <IoMoonOutline className="cursor-pointer" onClick={toggleTheme} />
          ) : (
            <IoSunnyOutline className="cursor-pointer" onClick={toggleTheme} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
