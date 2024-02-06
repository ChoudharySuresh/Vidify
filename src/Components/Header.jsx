import logo from "../Images/YouTube-White.svg";
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import SearchBar from "./SearchBar";
import MobileSearchBar from "./MobileSearchBar";
import { useState } from "react";
import { toggleMenu } from "../Store/Slice/appslice";
import { useDispatch } from "react-redux";
import Dropdown, { DropdownItem } from "./Dropdown";
import { CiLogin, CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import AuthUserInfo from "./AuthUserInfo";

const Header = () => {
  const [mobileSearchBar, setMobileSearchBar] = useState(false);

  const dispatch = useDispatch();
  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  // Auth0 hook
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
      {/* Navbar for Mobile  */}

      <div className="flex items-center justify-between bg-black z-30 md:mt-4 lg:mt-0 sticky top-0">
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="hidden md:block p-2 rounded-full hover:bg-[#272727] ">
            <IoIosMenu className="text-3xl" onClick={handleMenuClick} />
          </div>
          <img
            src={logo}
            alt="logo"
            className="w-[7rem] md:hidden lg:block lg:w-[8rem]"
          />
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

            <Dropdown
              trigger={
                isAuthenticated ? (
                  <img
                    src={user.picture}
                    alt="picture"
                    className="w-8 rounded-full cursor-pointer"
                  />
                ) : (
                  <FaRegUserCircle className="text-2xl md:text-3xl lg:mr-2 cursor-pointer" />
                )
              }
            >
              {isAuthenticated ? (
                <DropdownItem>
                  <AuthUserInfo userInfo={user} />
                </DropdownItem>
              ) : null}

              {isAuthenticated ? (
                <button className="w-[100%]" onClick={() => logout()}>
                  <DropdownItem>
                    <CiLogout size="1.5rem" color="white" /> Logout
                  </DropdownItem>
                </button>
              ) : (
                <button
                  className="w-[100%]"
                  onClick={() => loginWithRedirect()}
                >
                  <DropdownItem>
                    <CiLogin size="1.5rem" color="white" /> Login
                  </DropdownItem>
                </button>
              )}
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
