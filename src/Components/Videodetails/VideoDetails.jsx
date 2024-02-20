import { useEffect, useState } from "react";
import { API_KEY } from "../../Utils/Constant";
import ChannelData from "./ChannelData";
import { formatViewCount, timeAgo } from "../../Utils/helperFunction";

const VideoDetails = ({ videoId }) => {
  const [videoDetails, setVideoDetails] = useState({
    videoTitle: "",
    channelId: "",
    channelTitle: "",
    likeCount: "",
    viewCount: "",
    publishedAt: "",
  });

  const getVideoDetails = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    );
    const JSONResponse = await response.json();
    // console.log(JSONResponse?.items[0]);
    const item = JSONResponse?.items[0].snippet;
    setVideoDetails({
      videoTitle: item?.title,
      channelId: item?.channelId,
      channelTitle: item?.channelTitle,
      publishedAt: item?.publishedAt,
      likeCount: JSONResponse?.items[0]?.statistics?.likeCount,
      viewCount: JSONResponse?.items[0]?.statistics?.viewCount,
    });
  };

  useEffect(() => {
    getVideoDetails();
  }, []);

  return (
    <>
      <div>
        {/* Upper Channel Data  */}
        <div className="lg:flex lg:flex-col lg:gap-4">
          <h1 className="font-bold text-2xl">{videoDetails.videoTitle}</h1>
          <div className="flex items-center gap-4 my-4 text-[#aaa] text-sm lg:hidden">
            <p>{formatViewCount(videoDetails?.viewCount)} Views</p>
            <p>{timeAgo(videoDetails?.publishedAt)}</p>
          </div>
          <ChannelData info={videoDetails} />
        </div>
        {/* Description */}
        <div></div>
      </div>
    </>
  );
};

export default VideoDetails;
