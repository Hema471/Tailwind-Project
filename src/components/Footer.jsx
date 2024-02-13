import React, { useState } from "react";

const Footer = () => {
  const [links, setLinks] = useState([
    "About Us",
    "Jobs",
    "Press",
    "Blog",
    "Contact Us",
    "Terms",
    "PRivacy",
  ]);
  return (
    <section className="container">
      <div className="1">
        <a href="/">
          <img src="/src/assets/logo.svg" alt="Logo" />
        </a>
        <a href="/">
          <img src="/src/assets/icon-location.svg" alt="icon-location" />
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolor
          voluptate, laudantium doloribus ullam, in repudiandae nemo corporis
          at, praesentium illum veritatis voluptas odit iste! Deleniti corrupti
          consectetur maiores itaque.
        </p>
      </div>
      <div className="2">
        <a href="/">
          +012321542
          <img src="/src/assets/icon-phone.svg" alt="icon-phone" />
        </a>
        <a href="/">
          example@fylo.com
          <img src="/src/assets/icon-email.svg" alt="icon-phone" />
        </a>
      </div>
      <div className="3">
        <ul>
          {links.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </div>
      <div className="4">
        {/* 3 Icons From React Icons */}
      </div>
    </section>
  );
};

export default Footer;
