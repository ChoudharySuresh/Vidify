import SingleButton from "./SingleButton";
import { btnValues } from "../Utils/Constant";

const ButtonCarousel = () => {
  return (
    <div className="w-full">
      <SingleButton slides={btnValues} />
    </div>
  );
};

export default ButtonCarousel;
