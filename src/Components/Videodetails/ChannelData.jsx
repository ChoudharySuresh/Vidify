import useChannelLogo from "../../hooks/useChannelLogo";
import useSubScriberCount from "../../hooks/useSubScriberCount";
import { BiLike, BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";

const formatSubscriberCount = (count) => {
  const thousand = 1000;
  const million = 1000000;
  const billion = 1000000000;

  if (count < thousand) {
    return count.toString();
  } else if (count < million) {
    return (count / thousand).toFixed(0) + "K";
  } else if (count < billion) {
    return (count / million).toFixed(1) + "M";
  } else {
    return (count / billion).toFixed(1) + "B";
  }
};

const ChannelData = ({ info }) => {
  // console.log(info);

  const truncateTitle = (title) => {
    if (title.length >= 10) {
      return title.slice(0, 10) + "...";
    } else {
      return title;
    }
  };

  const url = useChannelLogo(info.channelId);

  const subscribers = useSubScriberCount(info.channelId);
  // console.log(subscribers?.statistics?.subscriberCount);
  return (
    <>
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        {/* Left ChannelLogo and Channel Title Part */}
        <div className="flex items-center justify-between w-full lg:justify-start lg:gap-8">
          <div className="flex items-center gap-2">
            <div>
              {url ? (
                <div className="w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem]">
                  <img
                    src={url.snippet.thumbnails.default.url}
                    alt="channelLogo"
                    className="rounded-full"
                  />
                </div>
              ) : (
                <div className="w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem] bg-slate-600 animate-pulse rounded-full"></div>
              )}
            </div>
            <div className="flex items-center gap-4">
              <h1 className="text-sm md:hidden">
                {truncateTitle(info.channelTitle)}
              </h1>
              <h1 className="hidden md:block">{info.channelTitle}</h1>
              <p className="text-sm">
                {formatSubscriberCount(
                  subscribers?.statistics?.subscriberCount
                )}
                <span className="hidden">SubScriber</span>
              </p>
            </div>
          </div>
          <button className="bg-[rgba(255,255,255,0.1)] rounded-full px-5 py-2">
            Subscribe
          </button>
        </div>
        {/* Right Buttons Part */}
        <div className="flex items-center gap-6 ">
          {/* Like Button */}
          <div className="flex items-center bg-[rgba(255,255,255,0.1)] rounded-full">
            <button className="flex items-center gap-2 px-3 py-2 rounded-l-full hover:bg-[#4B4947]">
              <BiLike className="text-2xl" />
              <p className="text-base">
                {formatSubscriberCount(info.likeCount)}
              </p>
            </button>
            <div className="w-[1px] bg-gray-500 h-8"></div>
            <button className="px-3 py-2 rounded-r-full hover:bg-[#4B4947]">
              <BiDislike className="text-2xl" />
            </button>
          </div>
          {/* Share Button */}
          <div>
            <button className="flex items-center gap-2 bg-[rgba(255,255,255,0.1)] px-3 py-2 rounded-full">
              <PiShareFatLight className="text-2xl" />
              <p className="text-lg">Share</p>
            </button>
          </div>
          {/* More Button */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ChannelData;
