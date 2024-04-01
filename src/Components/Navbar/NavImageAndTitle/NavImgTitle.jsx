const NavImgTitle = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img
        src="https://cdn.dribbble.com/users/6036446/screenshots/14616753/media/77137c7f55e7dbee4c4a028ce8379352.jpg?resize=768x576&vertical=center"
        className="w-28"
        alt=""
      />
      <h1 className="text-slate-100 font-semibold text-xl">
        Welcome to <span className="uppercase text-yellow-400">Super Shop</span>
      </h1>
    </div>
  );
};

export default NavImgTitle;
