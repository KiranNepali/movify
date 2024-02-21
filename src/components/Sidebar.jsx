import React from "react";

function Sidebar() { 
  return (
    <div className="w-[25rem]  h-screen py-10  px-4 border-r-[1px]  border-zinc-400">
      <h1 className="font-black text-3xl tracking-wider mb-10" >MOVIFY</h1>
      <div className="w-full flex justify-start items-start flex-col gap-5">
        <h1 className="font-bold text-xl tracking-wide mb-4">News Feed</h1>
        <span className="w-full border-b-[1px] p-3 text-regular tracking-wide">Trending</span>
        <span className="w-full border-b-[1px] p-3 text-regular tracking-wide">Popular</span>
        <span className="w-full border-b-[1px] p-3 text-regular tracking-wide">Movies</span>
        <span className="w-full border-b-[1px] p-3 text-regular tracking-wide">TV shows</span>
        <span className="w-full border-b-[1px] p-3 text-regular tracking-wide">Peoples</span>
      </div>
      <div className="w-full flex justify-start items-start flex-col gap-5 mt-10">
        <h1 className="font-bold text-xl tracking-wide mb-4">Webiste Info</h1>
        <span className="w-full border-b-[1px] p-3 text-regular tracking-wide">About</span>
        <span className="w-full border-b-[1px] p-3 text-regular tracking-wide">Contact</span>
      </div>
    </div>  
  );
}

export default Sidebar;
