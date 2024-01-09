import { useEffect, useState } from "react";

const SingleChipButton = ({ props, index, setActiveIndex, activeIndex }) => {
  const [btnvalue, setBtnValue] = useState("");

  useEffect(() => {
    console.log(btnvalue);
  }, [btnvalue]);

  const handleClick = () => {
    setActiveIndex(index);
    setBtnValue(props);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={` ${
          index === activeIndex ? `bg-white text-black` : `bg-[#272727]`
        } text-xl px-3 py-2 rounded-lg`}
        value={props}
      >
        {props}
      </button>
    </div>
  );
};

export default SingleChipButton;
