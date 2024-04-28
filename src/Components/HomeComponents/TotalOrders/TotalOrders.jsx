import { Fade } from "react-awesome-reveal";
import { MdOutlineSdStorage } from "react-icons/md";

const TotalOrders = ({ cartItems }) => {
  return (
    <Fade cascadia duration={2400} damping={1.2} direction="right">
      <div className="px-4 py-4 flex items-center justify-between gap-4 border-2 bg-[#EAD196] border-[#3F4E4F] rounded-lg">
        <MdOutlineSdStorage className="text-6xl text-[#3F4E4F]"></MdOutlineSdStorage>
        <div className="text-right">
          <h1 className="text-xl font-extrabold tracking-widest">
            Total Orders
          </h1>
          <p className="text-2xl font-extrabold">
            <span className="text-[#3F4E4F]"> {cartItems.length || 0} </span>
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default TotalOrders;
