import { useEffect, useState } from "react";
import { API_KEY } from "../../../Utils/Constant";
import SingleComment from "./SingleComment";
import SingleReplyComment from "./SingleReplyComment";
import { useSelector } from "react-redux";
import useScrollbarBottom from "../../../hooks/useScrollbarBottom";
import { formateCommentsCount } from "../../../Utils/helperFunction";

const NestedComments = ({ comment }) => {
  const replyButtonStates = useSelector(
    (store) => store.comments.replyButtonStates
  );

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
  const [scrollEnd, setIsScrollEnd] = useScrollbarBottom();
  console.log(videoId);
  const [comments, setComments] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [commentsCount, setCommentsCount] = useState(null);

  useEffect(() => {
    getComments();
    getCommentCount();
  }, []);

  async function getComments() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&order=relevance&textFormat=plainText&videoId=${videoId}&key=${API_KEY}`
    );
    const jsonData = await response.json();
    // console.log(jsonData);
    setNextPageToken(jsonData?.nextPageToken);
    setComments(jsonData?.items);
  }

  // Fetching More Comments When Scroll End
  const getMoreComments = async () => {
    setIsScrollEnd(false);
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&order=relevance&textFormat=plainText&videoId=${videoId}&key=${API_KEY}&nextPageToken=${nextPageToken}`
    );
    const jsonResponse = await response?.json();
    setNextPageToken(jsonResponse?.nextPageToken);

    const moreComments = jsonResponse?.items;
    setComments([...comments, ...moreComments]);
  };

  // Calling getMoreComments Function When Scrollbar is at End
  useEffect(() => {
    if (scrollEnd && nextPageToken) {
      getMoreComments();
    }
    return () => {};
  }, [scrollEnd, nextPageToken]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Fetching Comments Count from API
  const getCommentCount = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${API_KEY}`
    );

    const jsonResponse = await response.json();
    setCommentsCount(jsonResponse?.items[0]?.statistics?.commentCount);
  };

  return (
    <div>
      <h1 className="text-xl font-bold py-4">
        {formateCommentsCount(commentsCount)} Comments
      </h1>
      <CommentList comments={comments} />
    </div>
  );
};

export default Comment;
