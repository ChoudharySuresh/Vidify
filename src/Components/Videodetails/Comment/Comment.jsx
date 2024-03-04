import { useEffect, useState } from "react";
import { API_KEY } from "../../../Utils/Constant";

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
              <div>
                <p>
                  {comment?.snippet?.topLevelComment?.snippet?.textOriginal}
                </p>
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
