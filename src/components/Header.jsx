import { useEffect, useState } from "react";

const Header = () => {
  const [links, setLinks] = useState(["Features", "Team", "Signin"]);
 
  return (
    <header className="pt-[60px] fixed  w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <img src="/src/assets/logo.svg" alt="Logo" />
        </a>
        <nav>
          <ul className="flex gap-5">
            {links.map((x) => (
              <li key={x} className="">
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
