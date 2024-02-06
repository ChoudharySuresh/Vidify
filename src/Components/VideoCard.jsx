import { useEffect, useState } from "react";
import { formatViewCount, timeAgo } from "../Utils/helperFunction";
import { API_KEY } from "../Utils/Constant";

const VideoCard = ({ info }) => {
  const thumbnail = info.snippet.thumbnails.medium;
  const { title, channelTitle, publishedAt, channelId } = info.snippet;
  const { viewCount } = info.statistics;

  const [channelDetails, setChannelDetails] = useState(null);

  const getChannelDetails = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`
    );
    const jsonResponse = await response.json();
    setChannelDetails(jsonResponse?.items[0]);
  };
  useEffect(() => {
    getChannelDetails();
  }, []);

  return (
    <div className="w-full md:w-[15rem] lg:w-[23.5rem] rounded-lg">
      {/* Video Thumbnail */}
      <div>
        <img src={thumbnail.url} alt="" className="w-full rounded-2xl" />
      </div>
      {/* Video Info */}
      <div className="flex items-start gap-3 my-4">
        <div>
          {channelDetails ? (
            <div className="w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem]">
              <img
                src={channelDetails.snippet.thumbnails.default.url}
                alt="channelLogo"
                className="rounded-full"
              />
            </div>
          ) : (
            <div className="w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem] bg-slate-600 animate-pulse rounded-full"></div>
          )}
        </div>
        <div>
          <h1 className="overflow-hidden h-12">
            <span className="line-clamp-2">{title}</span>
          </h1>
          <p className="text-[#aaa] mt-1">{channelTitle}</p>
          <div className="text-[#aaa] flex gap-4">
            <p>{formatViewCount(viewCount)}</p>
            <p>{timeAgo(publishedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
