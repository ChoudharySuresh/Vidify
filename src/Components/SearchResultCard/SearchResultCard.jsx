import { useEffect, useState } from "react";
import { formatViewCount, timeAgo } from "../../Utils/helperFunction";
import useChannelLogo from "../../hooks/useChannelLogo";

const SearchResultCard = ({ info }) => {
  const { title, channelTitle, channelId, description, publishedAt } =
    info.snippet;
  const thumbnail = info.snippet.thumbnails.medium;
  const { videoId } = info.id;
  //   console.log(videoId);
  //   console.log(info);
  const [viewsCount, setViewCount] = useState();

  const getViewCount = async (id) => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const jsonData = await response.json();
    // console.log(jsonData);
    setViewCount(jsonData?.items[0]?.statistics?.viewCount);
  };
  useEffect(() => {
    getViewCount(videoId);
  }, []);

  const url = useChannelLogo(channelId);
  //   console.log(channelId);
  //   console.log(url?.snippet?.thumbnails?.default);
  return (
    <div className="flex gap-2 mt-6">
      {/* Left Part of Search Card */}
      <div>
        <img
          src={thumbnail?.url}
          alt="searchResultImg"
          className="rounded-xl"
        />
      </div>
      {/* Right side of Search Card */}
      <div className="w-[70%]">
        <div>
          <h1 className="text-lg">{title}</h1>
          <div className="flex gap-2 items-center text-[#aaa]">
            <p>{formatViewCount(viewsCount)}</p>
            <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-slate-600"></div>
            <p>{timeAgo(publishedAt)}</p>
          </div>
        </div>
        <div className="my-4 text-[#aaa]">
          <div className="flex items-center gap-3">
            {url ? (
              <div className="w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem]">
                <img
                  src={url?.snippet?.thumbnails?.medium?.url}
                  alt="channelLogo"
                  className="rounded-full"
                />
              </div>
            ) : (
              <div className="w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem] bg-[#aaa] animate-pulse rounded-full"></div>
            )}
            <h2>{channelTitle}</h2>
          </div>
          <p className="mt-2 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
