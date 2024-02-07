const ShimmerCard = () => {
  return (
    <div className="w-full md:w-[13rem] lg:w-[21rem] rounded-2xl  flex flex-col gap-2 m-4 animate-pulse">
      <div className="w-full h-[10rem] lg:w-full lg:h-[12rem] bg-gray-400 rounded-2xl"></div>

      <div className="flex items-start gap-4">
        <div className="w-[3rem] h-[3rem] rounded-full bg-gray-400"></div>
        <div className="flex flex-col gap-2 mt-2">
          <div className="w-[10rem] h-[1rem] md:w-[8.5rem] lg:w-[15rem] lg:h-[1rem] rounded-md bg-gray-400"></div>
          <div className="w-[10rem] h-[1rem] md:w-[8.5rem] lg:w-[15rem] lg:h-[1rem] rounded-md bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
