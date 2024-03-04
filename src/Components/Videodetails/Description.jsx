import { useState } from "react";
import { timeAgo, formatViewCount } from "../../Utils/helperFunction";

const Description = ({ description, viewCount, publishedAt }) => {
  // console.log(description);
  const [showMore, setShowMore] = useState(false);

  const handleMoreButton = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <div
        className={`w-full h-[10rem] bg-[#272727] rounded-xl px-4 py-5 flex flex-col gap-4  ${
          showMore ? `h-full` : `h-[10rem]`
        }`}
      >
        <div className="hidden lg:flex items-center gap-4 ">
          <p>{formatViewCount(viewCount)} Views</p>
          <p>{timeAgo(publishedAt)}</p>
        </div>
        <div
          className={`w-full h-full overflow-hidden ${
            showMore ? `h-full overflow-y-visible` : `h-full`
          }`}
        >
          <p>{description}</p>
        </div>

        <div className="flex justify-end">
          <button className="" onClick={handleMoreButton}>
            {showMore ? "Show Less" : "More"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Description;
