import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
// import "./MainLayout.css";
// import { useState } from "react";

const MainLayout = () => {
  // const [showNavbar, setShowNavbar] = useState(false);

  // // Function to toggle navbar visibility
  // const toggleNavbar = () => {
  //   setShowNavbar(!showNavbar);
  // };
  return (
    <div>
      <div className="grid grid-cols-12 font-poppins">
        <div className="col-span-3">
          <Navbar></Navbar>
        </div>
        <div className="col-span-9 bg-[#FDF7E4] text-slate-900 text-sm">
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>

    // <div className="drawer">
    //   <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-content grid grid-cols-12 items-center">
    //     <div className="col-span-1">
    //       <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
    //         Open drawer
    //       </label>
    //     </div>
    //     <div className="col-span-11">
    //       <Header></Header>
    //       <Outlet></Outlet>
    //     </div>
    //   </div>
    //   <div className="drawer-side">
    //     <label
    //       htmlFor="my-drawer"
    //       aria-label="close sidebar"
    //       className="drawer-overlay"
    //     ></label>
    //     <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
    //       {/* Sidebar content here */}
    //       {/* <li>
    //         <a>Sidebar Item 1</a>
    //       </li>
    //       <li>
    //         <a>Sidebar Item 2</a>
    //       </li> */}
    //       <NavMenus></NavMenus>
    //     </ul>
    //   </div>
    // </div>

    // <div className="app">
    //   <div className={`navbar ${showNavbar ? "active" : ""}`}>
    //     <Navbar></Navbar>
    //   </div>

    //   <div className="content">
    //     <Header></Header>
    //     <Outlet></Outlet>
    //     <Footer></Footer>
    //   </div>
    //   <div className="left-border-listener" onMouseEnter={toggleNavbar}></div>
    // </div>
  );
};

export default MainLayout;
