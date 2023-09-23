import { IoIosArrowDroprightCircle } from "react-icons/io";
import { about } from "../data";

const About = () => {
  const { title, subtitle1, subtitle2, icon, link } = about;
  return (
    <section id="about" className="py-20 md:py-28 lg:pt-36 lg:pb-44">
      <div className="container mx-auto px-5 lg:px-32">
        {/* title */}
        <div
          className="section-title-group justify-start"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img src={icon} alt="" />
          <h2 className="h2 section-title">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        {/* subtitle 1*/}
        <p
          className="md:text-body-md mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {subtitle1}
        </p>
        {/* subtitle 2*/}
        <p
          className="md:text-body-md mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {subtitle2}
        </p>
        {/* link */}
        <div data-aos="fade-up" data-aos-delay="200">
          <a
            className="link flex items-center gap-x-1 hover:gap-x-4 transition-all duration-300 ease-in-out"
            href="#shop"
          >
            {link}
            <IoIosArrowDroprightCircle className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
