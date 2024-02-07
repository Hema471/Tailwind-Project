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

        </div>
      </div>
    </section>
  );
};

export default StayProductive;
