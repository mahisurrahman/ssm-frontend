import { Fade } from "react-awesome-reveal";
import { MdOutlineAttachMoney } from "react-icons/md";

const TotalProfit = () => {
  return (
    <Fade cascadia duration={2800} damping={1.2} direction="right">
      <div className="px-4 py-4 border-2 bg-[#EAD196] border-[#3F4E4F] rounded-lg text-left">
        <h1 className="text-xl font-extrabold tracking-widest">
          {" "}
          User: <span className="font-normal">Admin</span>
        </h1>
        <p className="text-xl font-extrabold">
          Email:
          <span className="font-normal"> admin@gmail.com</span>
        </p>
      </div>
    </Fade>
  );
};

export default TotalProfit;
