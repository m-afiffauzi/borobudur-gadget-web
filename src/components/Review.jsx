import ReviewSlider from "./ReviewSlider";
import { review } from "../data";

const Review = () => {
  const { icon, testimonials, title } = review;
  return (
    <section id="review" className="section relative mb-20 lg:mb-48">
      <div className="container mx-auto">
        <div className="flex justify-center">
          {/* section name */}
          <div
            className="section-title-group w-full px-4 lg:px-0 lg:ml-0 mx-auto"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <img src={icon} alt="Community Icon" className="scale-75" />
            <h2 className="h2 section-title">
              {title} <span className="text-primary-200">.</span>
            </h2>
          </div>
          {/* slider */}
          <div
            className="w-[1140px] absolute top-48"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="300"
          >
            <ReviewSlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
