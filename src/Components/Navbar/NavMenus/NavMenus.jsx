import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoReceiptSharp } from "react-icons/io5";
import { FcSalesPerformance } from "react-icons/fc";
import { FcBarChart } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcFilingCabinet } from "react-icons/fc";
import { MdOutlineBusinessCenter } from "react-icons/md";

const NavMenus = () => {
  const navigate = useNavigate();
  const hardReload = () => {
    navigate("/products-list");
    window.location.reload();
  };

  return (
    <div className="text-slate-100">
      <Link to="/">
        <div className="text-xs mb-3 px-2 py-[4px] bg-[#EAD196] text-slate-900 font-bold rounded-lg flex items-center gap-2 duration-1000 hover:bg-[#9BCF53] hover:duration-1000 hover:cursor-pointer">
          <FaHome className="text-xl"></FaHome>
          <h1>Dashboard</h1>
        </div>
      </Link>
      <Link to="/create-product">
        <div className="text-xs mb-3 px-2 py-[4px] bg-[#EAD196] text-slate-900 font-bold rounded-lg flex items-center gap-2 duration-1000 hover:bg-[#9BCF53] hover:duration-1000 hover:cursor-pointer">
          <FaPlus className="text-xl"></FaPlus>
          <h1>Create Product</h1>
        </div>
      </Link>
      <Link onClick={hardReload}>
        <div className="text-xs mb-3 px-2 py-[4px] bg-[#EAD196] text-slate-900 font-bold rounded-lg flex items-center gap-2 duration-1000 hover:bg-[#9BCF53] hover:duration-1000 hover:cursor-pointer">
          <FaClipboardList className="text-xl"></FaClipboardList>
          <h1>Active Products</h1>
        </div>
      </Link>
      <Link to="">
        <div className="text-xs mb-3 px-2 py-[4px] bg-[#EAD196] text-slate-900 font-bold rounded-lg flex items-center gap-2 duration-1000 hover:bg-[#9BCF53] hover:duration-1000 hover:cursor-pointer">
          <MdOutlineBusinessCenter className="text-xl"></MdOutlineBusinessCenter>
          <h1>Sales</h1>
        </div>
      </Link>
      <Link to="">
        <div className="text-xs mb-3 px-2 py-[4px] bg-[#EAD196] text-slate-900 font-bold rounded-lg flex items-center gap-2 duration-1000 hover:bg-[#9BCF53] hover:duration-1000 hover:cursor-pointer">
          <IoReceiptSharp className="text-xl"></IoReceiptSharp>
          <h1>Receipts</h1>
        </div>
      </Link>
      <div className="my-5">
        <hr />
      </div>
      <Link to="/all-products">
        <div className="text-xs mb-3 px-2 py-[4px] bg-[#EAD196] text-slate-900 font-bold rounded-lg flex items-center gap-2 duration-1000 hover:bg-[#9BCF53] hover:duration-1000 hover:cursor-pointer">
          <FcSalesPerformance className="text-xl"></FcSalesPerformance>
          <h1>All Products Lists</h1>
        </div>
      </Link>
      <Link to="">
        <div className="text-xs mb-3 px-2 py-[4px] bg-[#EAD196] text-slate-900 font-bold rounded-lg flex items-center gap-2 duration-1000 hover:bg-[#9BCF53] hover:duration-1000 hover:cursor-pointer">
          <FcSalesPerformance className="text-xl"></FcSalesPerformance>
          <h1>Sales Management</h1>
        </div>
      </Link>
      <Link to="">
        <div className="text-xs mb-3 px-2 py-[4px] bg-[#EAD196] text-slate-900 font-bold rounded-lg flex items-center gap-2 duration-1000 hover:bg-[#9BCF53] hover:duration-1000 hover:cursor-pointer">
          <FcBarChart className="text-xl"></FcBarChart>
          <h1>Daily Sales Report</h1>
        </div>
      </Link>
      <Link to="">
        <div className="text-xs mb-3 px-2 py-[4px] bg-[#EAD196] text-slate-900 font-bold rounded-lg flex items-center gap-2 duration-1000 hover:bg-[#9BCF53] hover:duration-1000 hover:cursor-pointer">
          <FcBullish className="text-xl"></FcBullish>
          <h1>Monthly Sales Report</h1>
        </div>
      </Link>
      <Link to="">
        <div className="text-xs mb-3 px-2 py-[4px] bg-[#EAD196] text-slate-900 font-bold rounded-lg flex items-center gap-2 duration-1000 hover:bg-[#9BCF53] hover:duration-1000 hover:cursor-pointer">
          <FcFilingCabinet className="text-xl"></FcFilingCabinet>
          <h1>My Cart</h1>
        </div>
      </Link>
    </div>
  );
};

export default NavMenus;
