import React, { useState } from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
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
    <section className="bg-[#0d1424]">
      <div className="container w-full gap-20 text-white grid md:grid-cols-4 md:mt-[-170px] md:pt-[350px] md:pb-[100px]">
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
          </p>
        </div>
        <div className="2 flex justify-between">
          <a href="/">
            <img src="/src/assets/icon-phone.svg" alt="icon-phone" />
          </a>
          <p>+012321542</p>
          <a href="/">
            <img src="/src/assets/icon-email.svg" alt="icon-phone" />
          </a>
          <p> example@fylo.com</p>
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
          <FaFacebookF />
          <CiTwitter />
          <FaInstagram />
        </div>
      </div>
    </section>
  );
};

export default Footer;
