import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
const MainLayout = () => {
  return (
    <div>
      <div className="grid grid-cols-12 font-poppins">
        <div className="col-span-2">
          <Navbar></Navbar>
        </div>
        <div className="col-span-10 bg-[#FDF7E4] text-slate-900 text-sm h-[96vh]">
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
