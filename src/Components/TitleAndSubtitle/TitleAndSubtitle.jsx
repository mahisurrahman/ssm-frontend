const TitleAndSubtitle = ({ title, subtitle }) => {
  return (
    <div className="text-center w-4/12 mx-auto">
      <h1 className="text-2xl font-extrabold tracking-widest">{title}</h1>
      <p className="tracking-widest text-md">{subtitle}</p>
      <div className="divider divider-warning -mt-1">***</div>
    </div>
  );
};

export default TitleAndSubtitle;
