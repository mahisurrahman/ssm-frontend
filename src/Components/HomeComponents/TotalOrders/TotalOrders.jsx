import { MdOutlineSdStorage } from "react-icons/md";

const TotalOrders = () => {
  return (
    <div className="px-4 py-4 flex items-center justify-between gap-4 border-2 bg-[#1A0061] border-[#3500D4] rounded-lg">
      <MdOutlineSdStorage className="text-6xl text-yellow-300"></MdOutlineSdStorage>
      <div className="text-right">
        <h1 className="text-xl font-extrabold tracking-widest">Total Orders</h1>
        <p className="text-2xl font-extrabold">
          <span className="text-yellow-300"> 99 </span> -/
        </p>
      </div>
    </div>
  );
};

export default TotalOrders;
