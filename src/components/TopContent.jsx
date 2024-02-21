import axios from "../utils/Api";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

function TopContent() {
  const [query, setQuery] = useState();
  const [searchData, setSearchData] = useState([]);
  const getSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearchData(data.results);
    } catch (err) {}
  };

  useEffect(() => {
    getSearch();
  }, [query]);
  return (
    <div className="w-full h-12 flex justify-start items-center relative">
      <div className="w-[40rem] h-full flex justify-center items-center bg-zinc-800 rounded-sm ">
        <IoSearchOutline className="text-zinc-400 text-2xl w-20" />
        <input
          onChange={(e) => {
            setQuery(e.target.value);
            console.log(query);
          }}
          type="text"
          placeholder="search..."
          className="w-full h-full outline-none bg-zinc-800 p-2"
        />
      </div>

      <div className="absolute bg-zinc-900 top-14 left-0 h-[25rem] w-[40rem] px-4 py-1 rounded-sm flex flex-col gap-1 justify-center items-start overflow-y-auto">
  {searchData.length > 0 && searchData.map((item, index) => (
    <div key={index} className="w-full flex justify-between">
      {item.backdrop_path && (
        <img
          src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
          className="object-cover obj rounded-sm w-10 h-10"
          alt=""
        />
      )}
      <span className="py-3">
        {item.orginal_name || item.orginal_title || item.name}
      </span>
    </div>
  ))}
</div>

    </div>
  );
}

export default TopContent;
