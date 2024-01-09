import { useState } from "react";
import SingleChipButton from "./SingleChipButton";

import { FaRegCompass } from "react-icons/fa";
const ButonChipSlider = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const chipsValue = [
    "All",
    "Gaming",
    "programming",
    "React",
    "Redux",
    "Music",
    "News",
    "Trailers",
    "Comedy",
    "Cars",
  ];

  return (
    <div
      className="flex flex-row overflow-x-scroll items-center gap-4 w-full my-2 snap-x snap-mandatory lg:hidden"
      style={{
        paddingBottom: "15px",
        clipPath: "inset(0 0 15px 0)",
      }}
    >
      <button className="bg-[#272727] text-3xl px-2 py-2 rounded-lg">
        <FaRegCompass />
      </button>

      {chipsValue.map((btn, index) => {
        return (
          <SingleChipButton
            props={btn}
            key={index}
            index={index}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
          />
        );
      })}
    </div>
  );
};

export default ButonChipSlider;
