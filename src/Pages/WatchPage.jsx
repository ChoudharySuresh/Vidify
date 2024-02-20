import { useSearchParams } from "react-router-dom";
import VideoDetails from "../Components/Videodetails/VideoDetails";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  console.log(id);
  return (
    <>
      <div className="flex flex-col gap-5 my-4 lg:flex-row lg:gap-8 md:px-4 xl:px-12">
        {/* First Column */}
        <div className="flex flex-col gap-3">
          <iframe
            className="aspect-video w-full md:w-full md:h-[32.75rem] lg:w-[40rem] lg:h-[22.5rem] xl:w-[57.125rem] xl:h-[32.125rem] rounded-lg md:rounded-xl lg:rounded-2xl "
            src={"https://www.youtube.com/embed/" + id + "?autoplay=1"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="md:w-full  lg:w-[40rem]  xl:w-[57.125rem] ">
            <VideoDetails videoId={id} />
          </div>
          <div className="md:w-full  lg:w-[40rem]  xl:w-[57.125rem] ">
            <h1>Comments Component</h1>
          </div>
        </div>
        {/* Second Column */}
        <div>Recommendation Component</div>
      </div>
    </>
  );
};

export default WatchPage;
