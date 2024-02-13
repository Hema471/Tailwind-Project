import React from "react";

const GetStarted = () => {
  return (
    // bg-[#1d2130]
    <section className="container z-10 relative  text-white w-fit max-w-full h-[480px] md:h-[330px]  pt-10 bg-[#22283c] rounded-[5px] ">
      <div className="flex flex-col justify-center items-center gap-5 my-1 max-w-full">
        <h1 className="text-2xl font-bold">Get early access today</h1>
        <p className="font-normal w-[600px] text-center max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius fugit
          saepe iste perspiciatis ipsa neque, amet officia deserunt quaerat
          fugiat temporibus vel corporis quas dolor aspernatur voluptatem a
          blanditiis cumque.
        </p>
      </div>
      <form className="flex mx-auto items-center gap-10 my-10 max-w-full flex-col md:flex-row  w-[1000px]">
        <input
          type="email"
          placeholder="example@fylo.com"
          className="rounded-[30px] outline-none border-none md:ml-10 px-5 w-full md:w-[600px] h-[60px] font-bold text-black"
        />
        <button
          type="submit"
          className="bg-[#42b0d1]  hover:bg-[#8cdae4] transition-all duration-200 element-centeredByFlex  w-full md:w-[245px] h-[60px] rounded-[30px] font-medium text-2xl"
        >
          Get started for free
        </button>
      </form>
    </section>
  );
};

export default GetStarted;
