import { Fade } from "react-awesome-reveal";

const TitleAndSubtitle = ({ title, subtitle }) => {
  return (
    <Fade cascadia duration={2000} damping={1.2} direction="right">
      <div className="text-center w-5/12 mx-auto mb-10">
        <h1 className="text-2xl font-extrabold tracking-widest">{title}</h1>
        <p className="tracking-widest text-md">{subtitle}</p>
        <div className="divider divider-warning -mt-1">***</div>
      </div>
    </Fade>
  );
};

export default TitleAndSubtitle;
