const FeaturesBox = ({ title, icon, desc }) => {
  return (
    <section className="container element-centeredByFlex mt-20 ">
      <div className="text-white text-center w-60">
        <img
          src={`src/assets/${icon}`}
          alt="Feature-img"
          className="mx-auto object-contain"
        />
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </section>
  );
};

export default FeaturesBox;
