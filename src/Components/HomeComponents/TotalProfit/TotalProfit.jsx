import { MdOutlineAttachMoney } from "react-icons/md";

const TotalProfit = () => {
  return (
    <div className="px-4 py-4 flex items-center justify-between border-2 bg-[#EAD196] border-[#3F4E4F] rounded-lg">
      <MdOutlineAttachMoney className="text-6xl text-[#3F4E4F]"></MdOutlineAttachMoney>
      <div className="text-right">
        <h1 className="text-xl font-extrabold tracking-widest">Total Profit</h1>
        <p className="text-2xl font-extrabold text-right">
          <span className="text-[#3F4E4F]"> 10 </span>
        </p>
      </div>
    </div>
  );
};

export default TotalProfit;
