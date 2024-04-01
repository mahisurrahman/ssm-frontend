import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="grid grid-cols-12 font-poppins">
        <div className="col-span-3">
          <Navbar></Navbar>
        </div>
        <div className="col-span-9 bg-[#000000] text-slate-100 text-sm">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
