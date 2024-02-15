const FeaturesBox = ({ title, icon, desc }) => {
  return (
    <div className="container text-white element-centeredByFlex flex-col text-center">
      <img
        src={`${icon}`}
        alt="Feature-img"
        className="w-[80px] h-[80px] object-contain"
      />
      <h4 className="text-xl font-semibold my-[15px]">{title}</h4>
      <p className="font-normal text-sm w-[350px]">{desc}</p>
    </div>
  );
};

export default FeaturesBox;
