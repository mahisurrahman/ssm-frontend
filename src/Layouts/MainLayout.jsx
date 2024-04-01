import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-12 font-poppins">
      <div className="col-span-3">
        <Navbar></Navbar>
      </div>
      <div className="col-span-9">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
