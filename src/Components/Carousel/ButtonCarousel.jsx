// import SingleButton from "./SingleButton";
import { useEffect, useState } from "react";
import { btnValues } from "../../Utils/Constant";
import { useDispatch } from "react-redux";
import { toggleFilter, setFilterVideos } from "../../Store/Slice/FilterSlice";

const ButtonCarousel = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const dispatch = useDispatch();
  const fetchFilteredVideos = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${
          import.meta.env.VITE_API_KEY
        }&part=snippet&q=${selectedFilter || "cats"}&type=video&maxResults=30`
      );
      const data = await response.json();
      dispatch(setFilterVideos(data.items));
    } catch (error) {
      console.log(error);
    }
  };
  const handleFilter = (category) => {
    dispatch(toggleFilter(true));
    setSelectedFilter(category);
  };

  useEffect(() => {
    fetchFilteredVideos();
  }, [selectedFilter]);

  return (
    <div className="w-full">
      {btnValues.map((btn) => {
        return (
          <button
            key={btn.id}
            className="px-4 mx-2 py-2 bg-[rgba(255,255,255,0.1)] hover:bg-[#3F3F3F] rounded-md cursor-pointer"
            onClick={() => handleFilter(btn.category)}
          >
            {btn.category}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonCarousel;
