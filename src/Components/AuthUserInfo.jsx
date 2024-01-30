const AuthUserInfo = ({ userInfo }) => {
  return (
    <div className="flex gap-3 items-start ">
      <div>
        <img
          src={userInfo.picture}
          alt="picture"
          className="w-8 rounded-full md:w-10"
        />
      </div>
      <div>
        <h1>{userInfo.name}</h1>
        <p className="text-xs md:text-sm">{userInfo.email}</p>
      </div>
    </div>
  );
};

export default AuthUserInfo;
