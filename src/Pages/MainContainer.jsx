import ButtonCarousel from "../Components/ButtonCarousel";
import VideoList from "../Components/VideoList";

const MainContainer = () => {
  return (
    <div className="w-[95%] md:w-[70%] lg:w-[78%] flex flex-col gap-4">
      <ButtonCarousel />
      <VideoList />
    </div>
  );
};
//

export default MainContainer;
