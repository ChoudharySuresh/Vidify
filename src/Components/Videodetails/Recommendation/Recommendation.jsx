import { useEffect, useState } from "react";
// import { API_KEY } from "../../../Utils/Constant";
import RecommendationCard from "./RecommendationCard";
import { Link } from "react-router-dom";

const Recommendation = ({ videoId }) => {
  const [videoTitle, setVideoTitle] = useState(null);
  const [recommandation, setRecommandation] = useState(null);

  useEffect(() => {
    getVideoTitle();
    getRecommendation();
  }, []);
  async function getVideoTitle() {
    try {
      const resposne = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const jsonData = await resposne.json();
      setVideoTitle(jsonData?.items[0]?.snippet?.title);
    } catch (error) {
      console.log(error);
    }
  }

  async function getRecommendation() {
    try {
      const resposne = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&videoDuration=medium&q=${videoTitle}&key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const jsonData = await resposne.json();
      setRecommandation(jsonData?.items);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(recommandation);
  return (
    <>
      <div>
        {recommandation?.map((item) => {
          return (
            <Link to={"/watch?v=" + item?.id?.videoId} key={item?.id?.videoId}>
              <RecommendationCard info={item} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Recommendation;
