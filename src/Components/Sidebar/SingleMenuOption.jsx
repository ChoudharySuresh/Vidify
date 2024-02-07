const SingleMenuOption = ({ props }) => {
  const { id, logo: Logo, name } = props;
  return (
    <div
      className={`${
        id === 1 && name === "Home"
          ? `bg-[#ffffff1a] hover:bg-[#3F3F3F]`
          : `bg-transparent`
      } flex items-center gap-4 px-4 py-2 rounded-md cursor-pointer hover:bg-[#3F3F3F]`}
    >
      <span className="md:text-xl lg:text-2xl">
        <Logo />
      </span>
      <h1 className="md:ml-1 lg:ml-3">{name}</h1>
    </div>
  );
};

export default SingleMenuOption;
