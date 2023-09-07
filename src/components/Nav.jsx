import { nav } from "../data";

const Nav = () => {
  return (
    <nav className="hidden md:flex">
      <ul className="flex text-white gap-x-8">
        {nav.map((item) => {
          return (
            <li key={item.name}>
              <a className="hover:text-primary-200 transition" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
