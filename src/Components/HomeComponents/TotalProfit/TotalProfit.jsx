import { MdOutlineAttachMoney } from "react-icons/md";

const TotalProfit = () => {
  return (
    <div className="px-4 py-4 flex items-center justify-between border-2 bg-[#1A0061] border-[#3500D4] rounded-lg">
      <MdOutlineAttachMoney className="text-6xl text-yellow-300"></MdOutlineAttachMoney>
      <div className="text-right">
        <h1 className="text-xl font-extrabold tracking-widest">Total Profit</h1>
        <p className="text-2xl font-extrabold text-right">
          <span className="text-yellow-300"> 10 </span> -/
        </p>
      </div>
    </div>
  );
};

export default TotalProfit;
