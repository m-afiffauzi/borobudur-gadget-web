import Accordion from "./Accordion";
import { faq } from "../data";

const Faq = () => {
  const { accordions, icon, title } = faq;
  return (
    <section
      id="faq"
      className="section pt-[480px] lg:pt-[280px] mb-[80px] lg:mb-0"
    >
      <div className="max-w-[768px] m-auto lg:bg-faq bg-no-repeat bg-custom bg-center lg:min-h-[1160px] lg:pt-6">
        {/* section name */}
        <div
          className="section-title-group justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
        >
          <img src={icon} alt="FAQ" className="lg:hidden" />
          <h2 className="h2 section-title lg:mt-[100px]">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        {/* accordion */}
        <div
          className="flex flex-col gap-y-4 px-4"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-delay="200"
        >
          {accordions.map((accordion, index) => {
            return <Accordion accordion={accordion} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
