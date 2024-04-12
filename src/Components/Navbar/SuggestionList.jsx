import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchValue,
  setShowSuggestionList,
  setSearchResults,
} from "../../Store/Slice/SearchSlice";
import { Link } from "react-router-dom";

const fetchSearchResults = async (searchValue) => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchValue}&type=video&key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const jsonData = await response.json();
  return jsonData.items;
};
const SuggestionList = () => {
  const { searchSuggestion, showSuggestionList, searchValue } = useSelector(
    (store) => store.search
  );

  const dispatch = useDispatch();
  const handleSuggestionClick = async (value) => {
    dispatch(setSearchValue(value));
    dispatch(setShowSuggestionList(false));
    try {
      const results = await fetchSearchResults(value);
      dispatch(setSearchResults(results));
      console.log(results);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {showSuggestionList && searchValue.length > 0 && (
        <div className="fixed left-3 w-[95%] md:left-[17%] md:w-[59%] lg:left-[20%] xl:left-[26%] xl:max-w-[49%] 2xl:max-w-[40%] 2xl:left-[30%] bg-[hsl(0,0%,18.82%)] z-50 rounded-xl">
          <ul className="my-4">
            {searchSuggestion.map((s) => {
              return (
                <Link to={"/search"} key={s}>
                  <li
                    className="px-3 py-2 flex gap-4 cursor-pointer hover:bg-[#4B4947]"
                    onClick={() => handleSuggestionClick(s)}
                  >
                    <div>
                      <IoSearchOutline className="text-2xl" />
                    </div>
                    {s}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default SuggestionList;
