import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoReceiptSharp } from "react-icons/io5";
import { FcSalesPerformance } from "react-icons/fc";
import { FcBarChart } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { GrStorage } from "react-icons/gr";

const NavMenus = () => {
  return (
    <div className="text-slate-100">
      <Link to="/">
        <div className="mb-3 px-6 py-2 bg-[#1A0061] font-bold rounded-lg flex items-center gap-4 duration-1000 hover:bg-[#3500D4] hover:duration-1000 hover:cursor-pointer">
          <FaHome className="text-xl"></FaHome>
          <h1>Dashboard</h1>
        </div>
      </Link>
      <Link to="/create-product">
        <div className="mb-3 px-6 py-2 bg-[#1A0061] font-bold rounded-lg flex items-center gap-4 duration-1000 hover:bg-[#3500D4] hover:duration-1000 hover:cursor-pointer">
          <FaPlus className="text-xl"></FaPlus>
          <h1>Create Product</h1>
        </div>
      </Link>
      <Link to="">
        <div className="mb-3 px-6 py-2 bg-[#1A0061] font-bold rounded-lg flex items-center gap-4 duration-1000 hover:bg-[#3500D4] hover:duration-1000 hover:cursor-pointer">
          <FaClipboardList className="text-xl"></FaClipboardList>
          <h1>Products Lists</h1>
        </div>
      </Link>
      <Link to="">
        <div className="mb-3 px-6 py-2 bg-[#1A0061] font-bold rounded-lg flex items-center gap-4 duration-1000 hover:bg-[#3500D4] hover:duration-1000 hover:cursor-pointer">
          <GrStorage className="text-xl"></GrStorage>
          <h1>Stocks Lists</h1>
        </div>
      </Link>
      <Link to="">
        <div className="mb-3 px-6 py-2 bg-[#1A0061] font-bold rounded-lg flex items-center gap-4 duration-1000 hover:bg-[#3500D4] hover:duration-1000 hover:cursor-pointer">
          <IoReceiptSharp className="text-xl"></IoReceiptSharp>
          <h1>Receipts</h1>
        </div>
      </Link>
      <div className="my-5">
        <hr />
      </div>
      <Link to="">
        <div className="mb-3 px-6 py-2 bg-[#1A0061] font-bold rounded-lg flex items-center gap-4 duration-1000 hover:bg-[#3500D4] hover:duration-1000 hover:cursor-pointer">
          <FcSalesPerformance className="text-xl"></FcSalesPerformance>
          <h1>Sales Management</h1>
        </div>
      </Link>
      <Link to="">
        <div className="mb-3 px-6 py-2 bg-[#1A0061] font-bold rounded-lg flex items-center gap-4 duration-1000 hover:bg-[#3500D4] hover:duration-1000 hover:cursor-pointer">
          <FcBarChart className="text-xl"></FcBarChart>
          <h1>Daily Sales Report</h1>
        </div>
      </Link>
      <Link to="">
        <div className="mb-3 px-6 py-2 bg-[#1A0061] font-bold rounded-lg flex items-center gap-4 duration-1000 hover:bg-[#3500D4] hover:duration-1000 hover:cursor-pointer">
          <FcBullish className="text-xl"></FcBullish>
          <h1>Monthly Sales Report</h1>
        </div>
      </Link>
    </div>
  );
};

export default NavMenus;
