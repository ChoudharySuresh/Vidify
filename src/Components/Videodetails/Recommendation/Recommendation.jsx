import { useEffect, useState } from "react";
import { API_KEY } from "../../../Utils/Constant";
import RecommendationCard from "./RecommendationCard";

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
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
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
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&videoDuration=medium&q=${videoTitle}&key=${API_KEY}`
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
          return <RecommendationCard key={item?.id?.videoId} info={item} />;
        })}
      </div>
    </>
  );
};

export default Recommendation;
