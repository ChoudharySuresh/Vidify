import { SideBarMenu } from "../Utils/Constant";
import SingleMenuOption from "./SingleMenuOption";
import { ExploreMenu } from "../Utils/Constant";
const SideBar = () => {
  return (
    <div className="md:w-[32%] lg:w-[16%] hidden md:flex flex-col gap-1 sticky top-0 left-0 bg-black h-screen overflow-y-auto scrollbar-thumb-slate-300  scrollbar-thin scrollbar-track-black">
      <div className="flex flex-col gap-1">
        {SideBarMenu.map((item) => {
          return <SingleMenuOption props={item} key={item.id} />;
        })}
      </div>
      <hr className="my-2" />
      <div>
        <h2 className="mx-4 text-lg my-2">Explore</h2>
        <div className="flex flex-col gap-1">
          {ExploreMenu.map((item) => {
            return <SingleMenuOption props={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
