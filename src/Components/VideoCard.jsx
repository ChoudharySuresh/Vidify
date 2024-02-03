import { formatViewCount, timeAgo } from "../Utils/helperFunction";

const VideoCard = ({ info, channelData }) => {
  const channelLogo =
    channelData?.items[0]?.snippet?.thumbnails?.default?.url || "";
  const thumbnail = info.snippet.thumbnails.medium;
  const { title, channelTitle, publishedAt } = info.snippet;
  const { viewCount } = info.statistics;

  return (
    <div className="w-full md:w-[15rem] lg:w-[23rem] rounded-lg">
      {/* Video Thumbnail */}
      <div>
        <img src={thumbnail.url} alt="" className="w-full rounded-2xl" />
      </div>
      {/* Video Info */}
      <div className="flex items-start gap-3 my-4">
        <div>
          <div className="w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem]">
            <img src={channelLogo} alt="channelLogo" className="rounded-full" />
          </div>
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
