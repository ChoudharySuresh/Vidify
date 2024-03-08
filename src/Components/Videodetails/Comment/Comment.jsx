import { useEffect, useState } from "react";
import { API_KEY } from "../../../Utils/Constant";
import SingleComment from "./SingleComment";
import SingleReplyComment from "./SingleReplyComment";
import { useSelector } from "react-redux";

const NestedComments = ({ comment }) => {
  const replyButtonStates = useSelector(
    (store) => store.comments.replyButtonStates
  );
  // console.log(replyButton);
  return (
    <>
      <div>
        {comment?.replies && (
          <div
            className={`ml-16 ${
              replyButtonStates[comment.id] ? "block" : "hidden"
            }`}
          >
            {comment?.replies?.comments.map((reply) => (
              <>
                <NestedComments key={reply?.id} comment={reply} />
                {/* <p>{reply?.snippet?.textOriginal}</p> */}
                <SingleReplyComment reply={reply} />
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
              <div>
                <SingleComment comment={comment} />
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
  console.log(videoId);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments();
  }, []);

  async function getComments() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&order=relevance&textFormat=plainText&videoId=${videoId}&key=${API_KEY}`
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
