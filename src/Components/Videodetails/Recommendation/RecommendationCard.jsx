import { timeAgo } from "../../../Utils/helperFunction";

const RecommendationCard = ({ info }) => {
  const { channelTitle, title, publishedAt } = info.snippet;
  const thumbnail = info.snippet.thumbnails.medium;
  return (
    <>
      <div className="mt-2 flex">
        {/* Left Video Banner */}
        <div>
          <img
            src={thumbnail.url}
            alt="recommendation"
            className="w-full rounded-2xl"
          />
        </div>
        {/* Right Details */}
        <div>
          <h1 className="text-base">{title}</h1>
          <div>
            <p>{channelTitle}</p>
            <div className="flex items-center gap-3">
              <p>12k Views</p>
              <p>{timeAgo(publishedAt)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendationCard;
