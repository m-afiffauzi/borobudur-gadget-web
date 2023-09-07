/* eslint-disable react/prop-types */
import { nav } from "../data";

const NavMobile = ({ navMobile, setNavMobile }) => {
  return (
    <nav
      className={`${
        navMobile ? "min-w-full" : "min-w-0"
      } md:hidden min-h-screen bg-neutral-500 fixed top-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all w-0`}
    >
      <ul className="w-full h-full flex flex-col justify-center items-center gap-y-6 sm:gap-y-8  overflow-scroll">
        {nav.map((item) => {
          return (
            <li onClick={() => setNavMobile(!navMobile)} key={item.name}>
              <a className="text-white text-body-md" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
        {/* button */}
        <div className="flex justify-center gap-x-8">
          <a href="#contact" onClick={() => setNavMobile(!navMobile)}>
            <button className="bg-primary-200 btn-sm rounded-sm group [transform:translateZ(0)] px-6 py-3overflow-hidden relative before:absolute before:bg-white before:bottom-0 before:left-0 before:h-full before:w-full before:rounded-sm before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out before:duration-300">
              <span className="text-white group-hover:text-neutral-500 relative z-0 transition ease-in-out duration-300">
                Kontak
              </span>
            </button>
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default NavMobile;
