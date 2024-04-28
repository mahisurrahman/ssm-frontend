import { Fade } from "react-awesome-reveal";
import NavImgTitle from "./NavImageAndTitle/NavImgTitle";
import NavMenus from "./NavMenus/NavMenus";

const Navbar = () => {
  return (
    <Fade>
      <div className="h-[96vh] bg-[#BBAB8C]">
        <div className="px-4 py-4">
          <NavImgTitle></NavImgTitle>
        </div>
        <div className="px-6 ">
          <NavMenus></NavMenus>
        </div>
      </div>
    </Fade>
  );
};

export default Navbar;
