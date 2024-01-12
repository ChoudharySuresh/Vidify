import { useSelector } from "react-redux";
import SideBar from "../Components/SideBar";
import MainContainer from "./MainContainer";
import CloseSideBar from "../Components/CloseSideBar";

const Body = () => {
  const menu = useSelector((store) => store.app.isSideBarOpen);
  // console.log(menu);
  return (
    <div className="flex items-start gap-8 md:my-4">
      {menu ? <SideBar /> : <CloseSideBar />}
      <MainContainer />
    </div>
  );
};

export default Body;
