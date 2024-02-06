import { useEffect, useState } from "react";

const useScrollbarBottom = () => {
  const [isScrollEnd, setIsScrollEnd] = useState(false);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const innerHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    if (Math.ceil(scrollPosition + innerHeight >= scrollHeight)) {
      setIsScrollEnd(true);
    } else {
      setIsScrollEnd(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [isScrollEnd, setIsScrollEnd];
};

export default useScrollbarBottom;
