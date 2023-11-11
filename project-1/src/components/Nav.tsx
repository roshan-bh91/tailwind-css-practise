import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="absolute w-full z-10 padding-x py-8">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" height={29} width={130} />
        </a>
        <ul className="flex-1 flex justify-center items-center max-lg:hidden gap-16">
          {navLinks?.map(({ href, label }) => (
            <li key={label}>
              <a
                className="text-lg text-slate-gray leading-normal font-montserrat"
                href={href}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:block hidden cursor-pointer">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
