import React from "react";

const StayProductive = () => {
  return (
    <section className="container mt-20 grid grid-cols-1 md:grid-cols-2  place-items-center">
      <div className="">
        <img
          src="src/assets/illustration-stay-productive.png"
          alt="stay-productive-image"
        />
      </div>

      <div className="text-white text-[30px] font-bold leading-[50px]">
        <h3>
          Stay productive,
          <br />
          whereever you are
        </h3>
        <div className="text-sm font-normal my-[15px] tracking-[1px]">
          <p className="mb-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            repellat quasi similique esse quae dignissimos nemo est itaque
            cumque hic, maiores consequuntur vel, necessitatibus aut. Nostrum
            animi eius dolor commodi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            repellat quasi similique esse quae dignissimos nemo est itaque
            cumque hic, maiores consequuntur vel, necessitatibus aut. Nostrum
            animi eius dolor commodi.
          </p>
          <div className="my-2">
            <a
              href="/"
              className="flex gap-[15px]  w-fit pb-1 text-primary hover:text-[#42b0d1] hover:border-[#42b0d1] transition-all duration-200  border-b-2 border-primary"
            >
              See how Fylo works
              <img
                src="src/assets/icon-arrow.svg"
                alt="arrow-icon"
                className="w-[20px] h-[20px] object-contain animate-moveRight"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
