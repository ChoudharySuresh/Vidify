import { useEffect, useState } from "react";
// import { API_KEY } from "../Utils/Constant";

const useSubScriberCount = (channelId) => {
  const [subScriberCount, setSubScriberCountCount] = useState("");

  const getSubscriberCount = async (channelId) => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const jsonData = await response.json();
      setSubScriberCountCount(jsonData?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSubscriberCount(channelId);
  }, [channelId]);
  return subScriberCount;
};
export default useSubScriberCount;
