import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProviders";

const Header = () => {
  const {singOutUser} = useContext(AuthContext);

  const handleLogout = e =>{
    e.preventDefault();
    singOutUser()
    .then(result=>{
      console.log(result);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  return (
    <Fade cascadia duration={2000} damping={1.2} direction="right">
      <div className="py-2 px-4 bg-[#282828]">
        <div className="flex justify-between items-center">
          
          <button onClick={handleLogout} className="text-2xl text-slate-200 font-extrabold">Logout</button>
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
