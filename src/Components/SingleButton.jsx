import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const SingleButton = ({ slides }) => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(0);
    else setCurrent(current - 1);
  };
  let nextSlide = () => {
    if (current >= slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex items-center gap-2 mx-10 transition ease-out duration-200"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((btn) => {
          return (
            <button
              key={btn}
              className="px-4 py-2 bg-[rgba(255,255,255,0.1)] hover:bg-[#3F3F3F] rounded-md cursor-pointer"
            >
              {btn}
            </button>
          );
        })}
      </div>
      <div className="">
        <button
          onClick={previousSlide}
          className="hover:bg-[#f1f1f1] hover:text-black bg-[#3F3F3F] p-1 rounded-full text-xl absolute top-2"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={nextSlide}
          className="hover:bg-[#f1f1f1] hover:text-black bg-[#3F3F3F] p-1 rounded-full text-xl absolute top-2 right-0"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default SingleButton;
