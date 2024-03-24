import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../Store/Slice/SearchSlice";
import { setShowSuggestionList } from "../../Store/Slice/SearchSlice";

const SuggestionList = () => {
  const { searchSuggestion, showSuggestionList, searchValue } = useSelector(
    (store) => store.search
  );
  //   const {} = useSelector((store) => store.search);

  const dispatch = useDispatch();
  const handleSuggestionClick = (value) => {
    dispatch(setSearchValue(value));
    dispatch(setShowSuggestionList(false));
  };
  return (
    <>
      {showSuggestionList && searchValue.length > 0 && (
        <div className="absolute left-3 w-[95%] md:left-[17%] md:w-[59%] lg:left-[20%] xl:left-[26%] xl:max-w-[49%] 2xl:max-w-[40%] 2xl:left-[30%] bg-[hsl(0,0%,18.82%)] z-50 rounded-xl">
          <ul className="my-4">
            {searchSuggestion.map((s) => {
              return (
                <li
                  className="px-3 py-2 flex gap-4 cursor-pointer hover:bg-[#4B4947]"
                  key={s}
                  onClick={() => handleSuggestionClick(s)}
                >
                  <div>
                    <IoSearchOutline className="text-2xl" />
                  </div>
                  {s}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default SuggestionList;
