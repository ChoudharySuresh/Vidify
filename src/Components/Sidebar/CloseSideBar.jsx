import { SideBarMenu } from "../../Utils/Constant";
import CloseSingleMenuOption from "./CloseSingleMenuOption";
const CloseSideBar = () => {
  const MenuArray = SideBarMenu.filter((item) => item.id <= 3);
  return (
    <div className="hidden md:block">
      {MenuArray.map((item) => {
        return <CloseSingleMenuOption key={item.id} props={item} />;
      })}
    </div>
  );
};

export default CloseSideBar;
