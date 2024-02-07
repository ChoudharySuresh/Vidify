import { useId } from "react";
import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  const id = useId();
  return (
    <div className="w-full flex flex-wrap gap-4">
      {Array(10)
        .fill()
        .map(() => {
          return <ShimmerCard key={id} />;
        })}
    </div>
  );
};

export default Shimmer;
