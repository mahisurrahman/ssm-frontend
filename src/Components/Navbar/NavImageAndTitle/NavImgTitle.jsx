import { FaShoppingBag } from "react-icons/fa";

const NavImgTitle = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <FaShoppingBag className="text-5xl text-slate-100"></FaShoppingBag>
      <div className="text-center">
        <h1 className="text-slate-100 font-semibold text-[15px] leading-tight">
          Welcome to <span className="uppercase text-[#3F4E4F]"> Super Shop </span>
        </h1>
      </div>
    </div>
  );
};

export default NavImgTitle;
