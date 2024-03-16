import { useEffect } from "react";
import { useState } from "react";
// import { API_KEY } from "../Utils/Constant";

const useChannelLogo = (channelId) => {
  const [url, setUrl] = useState();

  const getChannelLogo = async (channelId) => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const jsonData = await response.json();
    setUrl(jsonData?.items[0]);
  };
  useEffect(() => {
    getChannelLogo(channelId);
  }, [channelId]);
  return url;
};

export default useChannelLogo;
