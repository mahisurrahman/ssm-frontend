import { FaShoppingBag } from "react-icons/fa";

const NavImgTitle = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <FaShoppingBag className="text-5xl text-slate-100"></FaShoppingBag>
      <div className="mt-2 text-center">
        <h1 className="text-slate-100 font-semibold text-2xl">
          Welcome to <br />
          <span className="uppercase text-[#3F4E4F]">Super Shop</span>
        </h1>
        <p className="text-slate-100">Get Your Desired Product</p>
      </div>
    </div>
  );
};

export default NavImgTitle;
