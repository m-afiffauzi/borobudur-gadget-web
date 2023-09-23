import { useState, useEffect } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { header } from "../data";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  // nav mobile state
  const [navMobile, setNavMobile] = useState(false);
  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });
  const { logo, btnHeaderText } = header;
  return (
    <header
      className={`${
        isActive ? "bg-neutral-500" : "bg-transparent"
      } fixed max-w-[1440px] z-30 left-0 right-0 mx-auto py-2 flex justify-between items-center px-5 lg:px-20 transition-all duration-300`}
    >
      {/* logo */}
      <a href="#">
        <img src={logo} alt="logo" className="h-10 lg:h-14" />
      </a>
      {/* nav */}
      <Nav />
      {/* btn */}
      <div className="hidden md:flex space-x-4">
        <a href="#contact">
          <button
            className="bg-primary-200 btn-sm rounded-sm group [transform:translateZ(0)] px-6 py-3 overflow-hidden relative before:absolute before:bg-white before:bottom-0 before:left-0 before:h-full before:w-full before:rounded-sm before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out before:duration-300"
            data-aos="fade-down"
            data-aos-delay="700"
          >
            <span className="text-white group-hover:text-neutral-500 relative z-0 transition ease-in-out duration-300">
              {btnHeaderText}
            </span>
          </button>
        </a>
      </div>
      {/* nav menu btn */}
      <div
        onClick={() => {
          setNavMobile(!navMobile);
        }}
        className="md:hidden absolute right-4"
      >
        {navMobile ? (
          <RiCloseFill className="text-primary-200 text-3xl cursor-pointer" />
        ) : (
          <RiMenuFill className="text-primary-200 text-3xl cursor-pointer" />
        )}
      </div>
      {/* Nav mobile */}
      <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} />
    </header>
  );
};

export default Header;
