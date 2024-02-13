import React, { useState } from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
const Footer = () => {
  const [links, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);
  return (
    <section className="bg-[#0d1424] ">
      <div className="container pt-[270px] w-full md:gap-[100px]  text-white grid md:grid-cols-4  mt-[-170px] md:pt-[250px]  items-center">
        <div className="1">
          <a href="/">
            <img src="/src/assets/logo.svg" alt="Logo" />
          </a>
          <div className="1.1 flex gap-5 my-20 ">
            <a href="/" className="mx-auto">
              <img
                src="/src/assets/icon-location.svg"
                alt="icon-location"
                className="w-[50px] h-[30px] object-contain"
              />
            </a>
            <p className="mx-auto text-sm tracking-[1px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              dolor voluptate, laudantium doloribus ullam, in repudiandae nemo
              corporis
            </p>
          </div>
        </div>
        <div className="2 flex mt-[-40px] md:mt-[5px] justify-between flex-col gap-5 md:pt-5">
          <div className="2.1 flex items-center gap-7">
            <a href="/">
              <img
                src="/src/assets/icon-phone.svg"
                alt="icon-phone"
                className="w-[18px] h-[18px] object-contain"
              />
            </a>
            <p>+012321542</p>
          </div>
          <div className="2.2 flex items-center gap-7">
            <a href="/">
              <img
                src="/src/assets/icon-email.svg"
                alt="icon-phone"
                className="w-[18px] h-[18px] object-contain"
              />
            </a>
            <p>example@fylo.com</p>
          </div>
        </div>
        <div className="3 flex md:justify-center mt-3">
          <ul>
            <a
              href="/"
              className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-[66px]"
            >
              {links.map((link) => (
                <li
                  className=" opacity-[0.8] transition-all duration-200 hover:opacity-[1]"
                  key={link}
                >
                  {link}
                </li>
              ))}
            </a>
          </ul>
        </div>
        <div className="4 flex gap-5 items-center my-10 md:mb-5 justify-center md:justify-center">
          {/* 3 Icons From React Icons */}
          <a href="/">
            <FaFacebookF className="w-[40px] h-[25px] object-contain" />
          </a>
          <a href="/">
            <CiTwitter className="w-[40px] h-[25px] object-contain" />
          </a>
          <a href="/">
            <FaInstagram className="w-[40px] h-[25px] object-contain " />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
