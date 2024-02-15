import { useState } from "react";
import TestimonialBox from "./TestimonialBox";

import Quotes from "../assets/bg-quotes.png";
import imgPath1 from "../assets/profile-1.jpg";
import imgPath2 from "../assets/profile-2.jpg";
import imgPath3 from "../assets/profile-3.jpg";

const Testimonial = () => {
  const [data, setData] = useState([
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      img: imgPath1,
      position: "Founder & CEO, Huddle",
      name: "Ahmed",
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      img: imgPath2,
      position: "Founder & CEO, Huddle",
      name: "Mohamed",
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      img: imgPath3,
      position: "Founder & CEO, Huddle",
      name: "Ali",
    },
  ]);
  //
  return (
    <section className="container my-[100px] relative">
      <img
        src={Quotes}
        alt="quote-image"
        className="absolute left-[20px] top-[-35px] z-[-1]"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]  relative">
        {data.map((person) => (
          <TestimonialBox
            key={person.name}
            desc={person.desc}
            position={person.position}
            img={person.img}
            name={person.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
