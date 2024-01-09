const CloseSingleMenuOption = ({ props }) => {
  const { logo: Logo, name } = props;
  return (
    <div className="flex flex-col items-center justify-center px-1 py-4 hover:bg-[#ffffff1a] cursor-pointer rounded-md">
      <span className="lg:text-2xl md:text-xl">
        <Logo />
      </span>
      <h2 className={`text-xs my-1`}>{name}</h2>
    </div>
  );
};

export default CloseSingleMenuOption;
