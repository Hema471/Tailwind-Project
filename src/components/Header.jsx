import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [links, setLinks] = useState(["Features", "Team", "Signin"]);
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";
      } else if (window.scrollY < 100) {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 0";
      }
    });
  });
  return (
    <header
      ref={headerRef}
      className="pt-[60px] fixed  w-full top-0 left-0 z-50 transition-all duration-200"
    >
      <div className="container mx-auto flex justify-between items-center flex-col sm:flex-row gap-[30px] sm:gap-0">
        <a href="/">
          <img src="/src/assets/logo.svg" alt="Logo" />
        </a>
        <nav>
          <ul className="flex gap-7">
            {links.map((x) => (
              <li key={x}>
                <a
                  href={`/${x.toLowerCase()}`}
                  className="text-white opacity-[0.9] hover:underline hover:opacity-[1] transition-opacity duration-200"
                >
                  {x}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
