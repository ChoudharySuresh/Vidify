import { IoArrowBack } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";

const MobileSearchBar = ({ data }) => {
  return (
    <>
      <div className="bg-[#383838] flex items-center justify-between gap-4 px-2 py-1 absolute top-6 left-0 z-20 w-full md:hidden">
        <IoArrowBack className="text-2xl" onClick={() => data(false)} />

        <div className="flex justify-between items-center w-[90%]">
          <input
            type="text"
            placeholder="Search"
            className="px-6 py-1 w-[100%] border border-slate-300 bg-black rounded-l-full outline-none focus:border-blue-400"
          />
          <div className="bg-[#222222] border border-l-0 border-gray-300 rounded-r-full p-1 cursor-pointer">
            <IoIosSearch className="text-2xl mx-2 cursor-pointer" />
          </div>
        </div>

        <div className="bg-[#606060] p-2 rounded-full cursor-pointer">
          <FaMicrophone className="text-base" />
        </div>
      </div>
    </>
  );
};

export default MobileSearchBar;
