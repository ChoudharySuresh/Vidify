import { timeAgo } from "../../../Utils/helperFunction";
import { trucateText } from "../../../Utils/helperFunction";
const RecommendationCard = ({ info }) => {
  const { channelTitle, title, publishedAt } = info.snippet;
  const thumbnail = info.snippet.thumbnails.medium;
  return (
    <>
      <div className="mt-3 flex items-start gap-4">
        {/* Left Video Thumbnail */}
        <div>
          <img
            src={thumbnail.url}
            alt=""
            className="w-full h-[6rem] rounded-lg"
          />
        </div>
        <div className="w-[70%] text-sm">
          <h1 className="text-sm">{trucateText(title, 56)}</h1>
          <p className="mt-2 text-gray-300">{channelTitle}</p>
          <div className="flex gap-2 items-center text-gray-300">
            <p>12k Views</p>
            <div className="w-[3px] h-[3px] bg-gray-300 rounded-full mt-1"></div>
            <p>{timeAgo(publishedAt)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendationCard;
