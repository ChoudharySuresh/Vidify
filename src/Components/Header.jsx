import logo from "../Images/YouTube-White.svg";
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import SearchBar from "./SearchBar";
import MobileSearchBar from "./MobileSearchBar";
import { useState } from "react";

const Header = () => {
  const [mobileSearchBar, setMobileSearchBar] = useState(false);
  return (
    <>
      {/* Navbar for Mobile  */}

      <div className="flex items-center justify-between mx-4 relative">
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="hidden lg:block p-2 rounded-full hover:bg-[#272727] ">
            <IoIosMenu className="text-3xl" />
          </div>
          <img src={logo} alt="logo" className="w-[7rem] md:w-[8rem]" />
        </div>

        {/* SearchBar for Larger Devices  */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

        <div className="flex items-center gap-8">
          <IoIosSearch
            className="text-2xl md:hidden"
            onClick={() => setMobileSearchBar(true)}
          />

          {mobileSearchBar ? <MobileSearchBar data={setMobileSearchBar} /> : ""}

          <div className="flex items-center justify-center gap-4">
            <div className="hidden md:block p-2 rounded-full hover:bg-[#606060] cursor-pointer">
              <FaRegBell className="text-2xl" />
            </div>
            <FaRegUserCircle className="text-2xl md:text-3xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;