import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addValue, toggleMenu } from "../utility/slices/appSlice";
import { YOUTUBE_SUGGESTIONS_API } from "../utility/constants";
import { chacheResult } from "../utility/slices/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchCache = useSelector((state) => state?.search);

  const handleSuggestions = useCallback(async () => {
  try {
    const data = await fetch(YOUTUBE_SUGGESTIONS_API + search);
    const jsonResponse = await data.json();
    setSuggestions(jsonResponse[1]);
    dispatch(chacheResult({
      [search]: jsonResponse[1],
    }));
    console.log(jsonResponse[1]); 
  } catch (err) {
    console.error("Failed to fetch suggestions:", err);
  }
}, [search, dispatch]); 

useEffect(() => {
  const debounce = setTimeout(() => {
    if (searchCache[search]) {
      setSuggestions(searchCache[search]);
    } else {
      handleSuggestions();
    }
  }, 200);

  return () => {
    clearTimeout(debounce);
  };
}, [search, searchCache, handleSuggestions]);

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow">
      <div className="flex col-span-1">
        <img
          className="h-8 mx-5"
          alt="hamburger-icon"
          src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"
          onClick={() => {
            dispatch(toggleMenu());
          }}></img>
        <img
          className="h-10 mx-4"
          alt="youtube-icon"
          src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"></img>
      </div>
      <div className="col-span-10 ml-6">
        <input
          type="text"
          className="w-7/12 h-8 rounded-l-full border-[#c6c6c6] border-[1px] outline-none p-2"
          onChange={(e) => {
            dispatch(addValue(e.target.value));
            setSearch(e.target.value);
          }}
          onFocus={() => setSuggestions(true)}
          onBlur={() => setSuggestions(false)}
          value={search}>

          </input>
        <button className=" border-[#c6c6c6] border-[1px] p-[4px] bg-slate-200 rounded-r-full w-[50px]">
          🔍
        </button>
        { (search.length > 0 && Array.isArray(suggestions) && suggestions.length > 0 ) &&
        <div className="p-2 border border-gray-400 rounded-lg shadow-lg w-[36.4%] ml-[4px] absolute bg-white">
          <ul>
            {suggestions.map((suggestion) => (
              <li className="py-1"key={suggestion}>🔍 {suggestion}</li>
            ))}
          </ul>
        </div>
}
      </div>
      <div>
        <img
          className="h-8 col-span-1"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>
      </div>
    </div>
  );
};

export default Head;
