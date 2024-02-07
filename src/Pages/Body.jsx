import { useSelector } from "react-redux";
import SideBar from "../Components/Sidebar/SideBar";
import MainContainer from "./MainContainer";
import CloseSideBar from "../Components/Sidebar/CloseSideBar";

const Body = () => {
  const menu = useSelector((store) => store.app.isSideBarOpen);
  return (
    <div className="flex items-start gap-8 md:my-4 relative">
      {menu ? <SideBar /> : <CloseSideBar />}
      <MainContainer />
    </div>
  );
};

export default Body;
