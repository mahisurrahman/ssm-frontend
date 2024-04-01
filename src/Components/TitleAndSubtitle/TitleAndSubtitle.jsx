const TitleAndSubtitle = ({title, subtitle}) => {
  return (
    <div className="text-center w-4/12 mx-auto">
      <div className="divider divider-warning">***</div>
      <h1 className="text-4xl font-extrabold tracking-widest">{title}</h1>
      <p className="tracking-widest">
        {subtitle}
      </p>
      <div className="divider divider-warning">***</div>
    </div>
  );
};

export default TitleAndSubtitle;
