import NavImgTitle from "./NavImageAndTitle/NavImgTitle";
import NavMenus from "./NavMenus/NavMenus";

const Navbar = () => {
  return (
    <div className="h-[96vh] bg-[#0D0031]">
      <div className="px-4 py-4">
        <NavImgTitle></NavImgTitle>
      </div>
      <div className="px-6 py-4">
        <NavMenus></NavMenus>
      </div>
    </div>
  );
};

export default Navbar;
