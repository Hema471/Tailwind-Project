import React from "react";

const Lainding = () => {
  return (
    <section className="bg-[#1c2230] ">
      <div className="container ">
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
            <div className="text-lg  px-[15px] md:w-[600px] mx-auto mb-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates laudantium quas quam accusamus officiis delectus esse
              magnam quibusdam ex similique libero, quisquam distinction
            </div>
          </div>
          <a
            href="/"
            className="btn element-centeredByFlex w-[280px] h-[60px] rounded-[30px] text-white font-medium text-2xl"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="h-[200px] mb-14">
        <img
          src="/src/assets/bg-curvy-desktop.svg"
          alt="curvy-desktop-Image"
          className=" h-full w-full"
        />
      </div>
    </section>
  );
};

export default Lainding;
