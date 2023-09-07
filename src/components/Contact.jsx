import { contact } from "../data";

const Contact = () => {
  const { btn, image, subtitle } = contact;
  return (
    <section
      id="contact"
      className="min-h-[537px] bg-neutral-500"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="100"
    >
      <div className="container mx-auto">
        {/* image & text wrapper */}
        <div className="flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:-space-y-0">
          {/* image */}
          <div
            className="-mt-[80px] max-w-[276px] md:max-w-[442px]"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="200"
          >
            <img
              src={image}
              alt="Contact"
              className="brightness-50 saturate-0"
            />
          </div>
          {/* text */}
          <div
            className="max-w-[350px] lg:max-w-[492px] ml-[30px]"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="300"
          >
            <h2 className="h1 md:text-[60px] md:leading-[62px] mb-4 lg:mb-6 text-white">
              Ingin tahu <span className="text-primary-200">informasi</span>{" "}
              lebih lanjut?
            </h2>
            <p className="text-body-sm md:text-body-md text-white mb-4 lg:mb-6 max-w-[348px] md:max-w-[470px] lg:max-w-[492px]">
              {subtitle}
            </p>
            <div className="flex flex-row flex-wrap lg:flex-nowrap gap-2">
              {btn.map((item, index) => {
                const { text, href } = item;
                return (
                  <a key={index} href={href} rel="noreferrer" target="_blank">
                    <button
                      className="bg-primary-200 btn btn-sm rounded-sm group [transform:translateZ(0)] w-32 py-3overflow-hidden relative before:absolute before:bg-white before:bottom-0 before:left-0 before:h-full before:w-full before:rounded-sm before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out before:duration-300"
                      data-aos="fade-down"
                      data-aos-delay="700"
                    >
                      <span className="text-white group-hover:text-neutral-500 relative z-0 transition ease-in-out duration-300">
                        {text}
                      </span>
                    </button>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
