import { useState } from "react";
import { FaGithub, FaArrowRightLong } from "react-icons/fa6";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const [theme, setTheme] = useState(true);
    const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme(!theme);
  }
  return (
    <div className="h-[100vh] flex flex-col pt-5 px-40">
      <div className="h-[8vh] bg-slate-100 rounded-full flex justify-between items-center p-5">
        <div className="text-zinc-800 text-2xl font-semibold italic select-none">formSnippet</div>
        <div className="text-black text-2xl font-bold flex gap-5">
          <FaGithub className="cursor-pointer" />
          {
            theme ?
              <IoMoonOutline className="cursor-pointer" onClick={toggleTheme} />
              : <IoSunnyOutline className="cursor-pointer" onClick={toggleTheme} />
          }
        </div>
      </div>
      <div className="flex flex-col items-center">
        <section id="hero-section" className="h-[70vh] w-3/4 text-center flex flex-col justify-center items-center gap-4">
          <p className="text-slate-500 text-lg">Transform Your Forms with Ease</p>
          <h1 className="font-bold text-6xl text-slate-900">
            Create, Customize, and Validate Forms in <span className="text-stroke">Minutes!</span>
          </h1>
          <div onClick={()=> navigate('/docs')}
            className="cursor-pointer py-3 px-8 mt-3 rounded-full bg-zinc-800 text-gray-300 font-medium flex items-center gap-3 hover:bg-gradient-to-bl from-zinc-600 to-zinc-800 hover:text-gray-100">
            <span>Visit Docs
            </span>
            <FaArrowRightLong />
          </div>
        </section>
        {/* Cards */}
        <section id="features" className="h-[50vh] w-3/4 text-center flex flex-wrap justify-evenly items-center gap-4">
          <div className='flex cursor-default flex-col w-[27%] p-5 text-left gap-5 rounded-md bg-zinc-800 text-gray-300 hover:bg-gradient-to-bl from-zinc-600 to-zinc-800 hover:text-gray-100'>
              <h2 className='text-3xl font-bold text-white'>Create</h2>
              <p className="text-lg">Design dynamic forms effortlessly with our intuitive API, transforming complex creation into a streamlined process and enjoy the seamless transition.</p>
          </div>
          <div className='flex cursor-default flex-col w-[27%] p-5 text-left gap-5 rounded-md bg-zinc-800 text-gray-300 hover:bg-gradient-to-bl from-zinc-600 to-zinc-800 hover:text-gray-100'>
              <h2 className='text-3xl font-bold text-white'>Customize</h2>
              <p className="text-lg">Unlock advanced styling options to perfectly align forms with your brand’s unique identity, and enjoy comprehensive control over every design detail for a precisely tailored user experience.</p>
          </div>
          <div className='flex cursor-default flex-col w-[27%] p-5 text-left gap-5 rounded-md bg-zinc-800 text-gray-300 hover:bg-gradient-to-bl from-zinc-600 to-zinc-800 hover:text-gray-100'>
              <h2 className='text-3xl font-bold text-white'>Validate</h2>
              <p className="text-lg">Ensure data integrity with powerful validation tools that catch errors instantly and efficiently; streamline user input with real-time feedback to enhance both accuracy and overall efficiency.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage;
