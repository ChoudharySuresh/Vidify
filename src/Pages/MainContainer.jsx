import { Outlet } from "react-router-dom";
import ButtonCarousel from "../Components/Carousel/ButtonCarousel";
import VideoList from "../Components/VideoContainer/VideoList";

const MainContainer = () => {
  return (
    <div className="w-[95%] md:w-[70%] lg:w-[78%] flex flex-col gap-4">
      <ButtonCarousel />
      <Outlet>
        <VideoList />
      </Outlet>
    </div>
  );
};
//

export default MainContainer;
