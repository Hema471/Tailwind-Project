import { useState } from "react";
import TestimonialBox from "./TestimonialBox";

const Testimonial = () => {
  const [data, setData] = useState([
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      img: "profile-1.jpg",
      position: "Founder & CEO, Huddle",
      name: "Ahmed",
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      img: "profile-2.jpg",
      position: "Founder & CEO, Huddle",
      name: "Mohamed",
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      img: "profile-3.jpg",
      position: "Founder & CEO, Huddle",
      name: "Ali",
    },
  ]);
  //
  return (
    <section className="container my-[100px] relative">
      <img
        src="/src/assets/bg-quotes.png"
        alt="quote-image"
        className="absolute left-[20px] top-[-35px] z-[-1]"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]  relative">
        {data.map((x) => (
          <TestimonialBox
            key={x.name}
            desc={x.desc}
            position={x.position}
            img={x.img}
            name={x.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
