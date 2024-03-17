import { useEffect } from "react";
import { useState } from "react";
// import { API_KEY } from "../../Utils/Constant";
import VideoCard from "./VideoCard";
import useScrollbarBottom from "../../hooks/useScrollbarBottom";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";

const VideoList = () => {
  const [allVideos, setAllVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [scrollEnd, setIsScrollEnd] = useScrollbarBottom();

  // console.log(import.meta.env.VITE_API_KEY);
  // Initial Videos Data
  const getVideos = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const jsonResponse = await response.json();
    setNextPageToken(jsonResponse?.nextPageToken);
    setAllVideos(jsonResponse?.items);
  };
  useEffect(() => {
    getVideos();
  }, []);

  // Fetching More Videos For Infinite scroll
  const getMoreVideos = async () => {
    setIsScrollEnd(false);
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&key=${
        import.meta.env.VITE_API_KEY
      }&pageToken=${nextPageToken}`
    );
    const jsonResponse = await response.json();
    setNextPageToken(jsonResponse?.nextPageToken);

    const moreVideos = jsonResponse?.items;
    setAllVideos([...allVideos, ...moreVideos]);
  };
  // Calling GetMoreVideo Function When Scrollbar is at End
  useEffect(() => {
    if (scrollEnd) {
      if (nextPageToken) {
        getMoreVideos();
      }
    }
    return () => {};
  }, [scrollEnd]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-4 mt-3">
        {allVideos?.length === 0 ? (
          <Shimmer />
        ) : (
          allVideos?.map((video) => {
            return (
              <Link key={video.id} to={"/watch?v=" + video.id}>
                <VideoCard info={video} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default VideoList;
