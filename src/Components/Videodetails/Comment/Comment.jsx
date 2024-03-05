import { useEffect, useState } from "react";
import { API_KEY } from "../../../Utils/Constant";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { BiSolidDownArrow } from "react-icons/bi";
import { timeAgo } from "../../../Utils/helperFunction";

const NestedComments = ({ comment }) => {
  return (
    <>
      <div>
        {comment?.replies && (
          <div>
            {comment?.replies?.comments.map((reply) => (
              <>
                <NestedComments key={reply?.id} comment={reply} />
                <p>{reply?.snippet?.textOriginal}</p>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
const CommentList = ({ comments }) => {
  return (
    <>
      <div>
        {comments?.map((comment) => {
          return (
            <>
              {/* Parent div */}
              <div className="flex gap-4 my-3">
                {/* left channel logo  */}
                <div>
                  <div className="w-[2rem] h-[2rem] ">
                    {comment?.snippet?.topLevelComment?.snippet
                      ?.authorProfileImageUrl ? (
                      <img
                        className="rounded-full"
                        src={
                          comment?.snippet?.topLevelComment?.snippet
                            ?.authorProfileImageUrl
                        }
                        alt=""
                      />
                    ) : (
                      <div className="w-[2rem] h-[2rem] bg-gray-500 rounded-full"></div>
                    )}
                  </div>
                </div>
                {/* Right comment details  */}
                <div>
                  <div className="flex items-center gap-2">
                    <p>
                      {
                        comment?.snippet?.topLevelComment?.snippet
                          ?.authorDisplayName
                      }
                    </p>
                    <p className="text-[#aaa] hover:cursor-pointer hover:text-[#dad8d8]">
                      {timeAgo(
                        comment?.snippet?.topLevelComment?.snippet?.publishedAt
                      )}
                    </p>
                  </div>
                  <p className="my-1">
                    {comment?.snippet?.topLevelComment?.snippet?.textOriginal}
                  </p>
                  {/* Button div */}
                  <div className="my-2 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <button className="text-xl rounded-full hover:bg-[#282828] p-2">
                        <FiThumbsUp />
                      </button>
                      {comment?.snippet?.topLevelComment?.snippet?.likeCount >
                        0 && (
                        <p className="text-[#aaa]">
                          {
                            comment?.snippet?.topLevelComment?.snippet
                              ?.likeCount
                          }
                        </p>
                      )}
                    </div>
                    <button className="text-xl rounded-full hover:bg-[#282828] p-2">
                      <FiThumbsDown />
                    </button>
                  </div>
                  <div>
                    {comment?.replies && (
                      <>
                        <div>
                          <button className=" px-3 py-2 rounded-full hover:bg-[#142e57] flex items-center gap-4">
                            <BiSolidDownArrow className="text-[#3ea6ff]" />
                            <p className="text-[#3ea6ff]">
                              {comment?.replies?.comments?.length} Replies
                            </p>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <NestedComments comment={comment} />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
const Comment = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments();
  }, []);

  async function getComments() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData);
    setComments(jsonData?.items);
  }

  return (
    <div>
      <h1>Comment</h1>
      <CommentList comments={comments} />
    </div>
  );
};

export default Comment;
