import { useState } from "react";

const Header = () => {
  const [links, setLinks] = useState(["Features", "Team", "Signin"]);
  return (
    <header className="container">
      <a href="/">
        <img src="/src/assets/logo.svg" alt="Logo" />
      </a>
      <nav>
        <ul>
          {links.map((x) => (
            <li key={x}>
              <a href={`/${x.toLowerCase()}`} className="text-white opacity-[0.9] hover:underline hover:opacity-[1] transition-opacity duration-200">
                {x}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
