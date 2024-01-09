import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";

const SearchBar = () => {
  return (
    <>
      <div className="flex items-center gap-6">
        <div className="flex justify-between items-center w-[30rem] lg:w-[40rem]">
          <input
            type="text"
            placeholder="Search"
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
