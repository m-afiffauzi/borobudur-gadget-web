/* eslint-disable react/prop-types */
import { nav } from "../data";

const NavMobile = ({ navMobile, setNavMobile }) => {
  return (
    <nav
      className={`${
        navMobile ? "min-w-full" : "min-w-0"
      } lg:hidden min-h-screen bg-neutral-500 fixed top-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all w-0`}
    >
      <ul className="w-full h-full flex flex-col justify-center items-center gap-y-6 sm:gap-y-8">
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
          <a
            onClick={() => setNavMobile(!navMobile)}
            href="#contact"
            className="btn btn-sm btn-primary"
          >
            Kontak
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default NavMobile;
