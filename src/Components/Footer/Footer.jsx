import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <Fade cascadia duration={2000} damping={1.2} direction="bottom">
      <div className="bg-[#282828] h-[4vh] flex items-center justify-center text-sm text-slate-100">
        <h1 className="tracking-wide font-semibold">
          ©TraIdeas, Super Shop 2024 !! All Rights Reserved
        </h1>
      </div>
    </Fade>
  );
};

export default Footer;
