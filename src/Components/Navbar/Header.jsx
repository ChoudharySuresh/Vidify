import logo from "../../Images/YouTube-White.svg";
import YTPlayLogo from "../../Images/YTLogo.png";
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
// import SearchBar from "./SearchBar";
import MobileSearchBar from "./MobileSearchBar";
import { useEffect, useState } from "react";
import { toggleMenu } from "../../Store/Slice/appslice";
import { useDispatch } from "react-redux";
import Dropdown, { DropdownItem } from "../Dropdown/Dropdown";
import { FaMicrophone } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { CiLogin, CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import AuthUserInfo from "../Dropdown/AuthUserInfo";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileSearchBar, setMobileSearchBar] = useState(false);

  const dispatch = useDispatch();
  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  // Auth0 hook
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  // Search
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  const getSearchSuggestions = async () => {
    const response = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`
    );
    const data = await response.json();
    setSuggestion(data[1]);
  };
  return (
    <>
      {/* Navbar for Mobile  */}

      <div className="flex items-center justify-between bg-black z-30 md:mt-4 lg:mt-0 sticky top-0">
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="hidden md:block p-2 rounded-full hover:bg-[#272727] ">
            <IoIosMenu className="text-3xl" onClick={handleMenuClick} />
          </div>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-[7rem] md:hidden lg:block lg:w-[8rem]"
            />
            <img
              src={YTPlayLogo}
              className="hidden md:block lg:hidden w-[3rem]"
            />
          </Link>
        </div>

        {/* SearchBar for Larger Devices  */}
        <div className="hidden md:block">
          <div className="flex items-center gap-6">
            <div className="flex justify-between items-center w-[30rem] lg:w-[40rem]">
              <input
                type="text"
                placeholder="Search"
                onChange={handleInput}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
                value={query}
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

      {showSuggestions && !query == "" && (
        <div className="bg-[hsl(0,0%,18.82%)] absolute md:w-[28rem] lg:w-[30rem] xl:w-[35rem] md:left-[15%] lg:left-[20%] xl:left-[30%] rounded-2xl z-50">
          <ul className="my-4 ">
            {suggestion.map((s) => {
              return (
                <li
                  className="px-4 py-1 cursor-pointer flex items-center gap-4 text-lg hover:bg-[#4B4947]"
                  key={s}
                >
                  <IoSearchOutline />
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

export default Header;
