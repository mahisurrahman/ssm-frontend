import { Fade } from "react-awesome-reveal";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fade cascadia duration={2000} damping={1.2} direction="right">
      <div className="py-2 px-4 bg-[#282828]">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-slate-100">
            Hello Super Shop Admin !!!
          </h1>
          <Link>
            <div className="flex justify-center items-center gap-2">
              <HiMiniShoppingCart className="text-3xl text-slate-100 duration-700 hover:text-slate-900 hover:cursor-pointer hover:duration-700"></HiMiniShoppingCart>
              <span className="text-xl text-slate-100 duration-700 hover:text-slate-900 hover:cursor-pointer hover:duration-700">
                +0
              </span>
            </div>
          </Link>
        </div>
      </div>
    </Fade>
  );
};

export default Header;
