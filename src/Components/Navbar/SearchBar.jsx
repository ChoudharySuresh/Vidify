import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { useEffect } from "react";
import {
  setSearchValue,
  setSearchSuggestion,
  setShowSuggestionList,
} from "../../Store/Slice/SearchSlice";

import { useDispatch, useSelector } from "react-redux";
const SearchBar = () => {
  // const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const Searchvalue = useSelector((store) => store.search.searchValue);

  const handleInput = (e) => {
    // setQuery(e.target.value);
    // query lefts one character in redux store search Value
    dispatch(setSearchValue(e.target.value));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [Searchvalue]);

  const getSearchSuggestions = async () => {
    const response = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${Searchvalue}`
    );
    const data = await response.json();
    dispatch(setSearchSuggestion(data[1]));
  };

  return (
    <>
      <div className="flex items-center gap-6">
        <div className="flex justify-between items-center w-[30rem] lg:w-[40rem]">
          <input
            type="text"
            placeholder="Search"
            onChange={handleInput}
            value={Searchvalue}
            onFocus={() => dispatch(setShowSuggestionList(true))}
            className=" px-6 py-2 w-[100%] border border-slate-300 bg-black rounded-l-full outline-none focus:border-blue-400"
          />
          <div className="bg-[#222222] border border-l-0 border-gray-300 rounded-r-full p-2 cursor-pointer">
            <IoIosSearch className="text-2xl mx-2 cursor-pointer" />
          </div>
        </div>

        <div className="hover:bg-[#606060] bg-[#222222] p-3 mr-2 rounded-full cursor-pointer">
          <FaMicrophone className="text-lg" />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
