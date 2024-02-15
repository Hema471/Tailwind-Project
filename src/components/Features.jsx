import { useState } from "react";
import FeaturesBox from "./FeaturesBox";

import imgPath1 from '../assets/icon-access-anywhere.svg';
import imgPath2 from '../assets/icon-security.svg';
import imgPath3 from '../assets/icon-collaboration.svg';
import imgPath4 from '../assets/icon-any-file.svg';

const Features = () => {
  const [features, setFeatures] = useState([
    {
      title: "Access your files, anywhere",
      icon: imgPath1,
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptates laudantium quas quam accusamus",
    },
    {
      title: "Security you can trust",
      icon: imgPath2,
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptates laudantium quas quam accusamus",
    },
    {
      title: "Real time collaboration",
      icon:imgPath3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptates laudantium quas quam accusamus",
    },
    {
      title: "Store any type of file",
      icon: imgPath4,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptates laudantium quas quam accusamus",
    },
  ]);
  return (
    <section className="container">
      <div className="grid grid-cols-1 max-w-full md:grid-cols-2 gap-[100px] w-[865px] mx-auto">
        {features.map((item) => (
          <FeaturesBox
            key={item.title}
            title={item.title}
            icon={item.icon}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
