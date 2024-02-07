import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  console.log(id);
  return (
    <>
      <div>
        <iframe
          className="aspect-video w-full md:w-full md:h-[32.75rem] lg:w-[40rem] lg:h-[22.5rem] xl:w-[57.125rem] xl:h-[32.125rem] rounded-2xl"
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default WatchPage;
