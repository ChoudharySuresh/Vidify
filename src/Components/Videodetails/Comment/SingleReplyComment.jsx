import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { timeAgo } from "../../../Utils/helperFunction";

const SingleReplyComment = ({ reply }) => {
  return (
    <>
      <div className="flex gap-4 my-3">
        {/* left channel logo  */}
        <div>
          <div className="w-[2rem] h-[2rem] ">
            {reply?.snippet?.authorProfileImageUrl ? (
              <img
                className="rounded-full"
                src={reply?.snippet?.authorProfileImageUrl}
                alt="authorImage"
              />
            ) : (
              <div className="w-[2rem] h-[2rem] bg-gray-500 rounded-full"></div>
            )}
          </div>
        </div>
        {/* Right comment details  */}
        <div>
          <div className="flex items-center gap-2">
            <p>{reply?.snippet?.authorDisplayName}</p>
            <p className="text-[#aaa] hover:cursor-pointer hover:text-[#dad8d8]">
              {timeAgo(reply?.snippet?.publishedAt)}
            </p>
          </div>
          <p className="my-1">{reply?.snippet?.textOriginal}</p>
          {/* Button div */}
          <div className="my-2 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <button className="text-xl rounded-full hover:bg-[#282828] p-2">
                <FiThumbsUp />
              </button>
              {reply?.snippet?.likeCount > 0 && (
                <p className="text-[#aaa]">{reply?.snippet?.likeCount}</p>
              )}
            </div>
            <button className="text-xl rounded-full hover:bg-[#282828] p-2">
              <FiThumbsDown />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleReplyComment;
