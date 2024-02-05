import React from "react";

const Lainding = () => {
  return (
    <section className="container">
      <div className="element-centeredByFlex flex-col pt-[200px]">
        <div>
          <img src="src/assets/illustration-intro.png" alt="Landing-Image" />
        </div>
        <div className="text-white text-center ">
          <h1 className="text-3xl font-bold mb-5">
            All your source files in one secure Location,
            <br />
            accessible anywhere
          </h1>
          <p className="text-lg  px-[15px] md:w-[600px] mx-auto max-w-full ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            laudantium quas quam accusamus officiis delectus esse magnam
            quibusdam ex similique libero, quisquam distinctio
          </p>
        </div>
      </div>
    </section>
  );
};

export default Lainding;
