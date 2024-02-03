import { useEffect, useState } from "react";
import { fetchVideos } from "../Store/Slice/dataslice";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { API_KEY } from "../Utils/Constant";

const VideoList = () => {
  const { data } = useSelector((state) => state.data);
  // console.log(data);
  const [channelData, setChannelData] = useState([]);
  const channelLogo = data.map((item) => item.snippet.channelId);

  useEffect(() => {
    const fetchData = async () => {
      const promise = channelLogo.map(async (id) => {
        const channelData = await fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
        );
        const jsonData = await channelData.json();
        return jsonData;
      });

      const results = await Promise.all(promise);
      setChannelData(results);
    };
    fetchData();
  }, [data]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, []);
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((item, index) => {
        return (
          <VideoCard info={item} key={index} channelData={channelData[index]} />
        );
      })}
    </div>
  );
};

export default VideoList;
