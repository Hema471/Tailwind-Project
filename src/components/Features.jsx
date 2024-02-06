import { useState } from "react";
import FeaturesBox from "./FeaturesBox";

const Features = () => {
  const [features, setFeatures] = useState([
    {
      title: "Access your files, anywhere",
      icon: "icon-access-anywhere.svg",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptates laudantium quas quam accusamus",
    },
    {
      title: "Security you can trust",
      icon: "icon-security.svg",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptates laudantium quas quam accusamus",
    },
    {
      title: "Real time collaboration",
      icon: "icon-collaboration.svg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptates laudantium quas quam accusamus",
    },
    {
      title: "Store any type of file",
      icon: "icon-any-file.svg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptates laudantium quas quam accusamus",
    },
  ]);

  return (
    <section className="container">
      {features.map((item) => (
        <FeaturesBox
          key={item.title}
          title={item.title}
          icon={item.icon}
          desc={item.desc}
        />
      ))}
    </section>
  );
};

export default Features;
