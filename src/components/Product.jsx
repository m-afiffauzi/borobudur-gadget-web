import ProductSlider from "./ProductSlider";
import { product } from "../data";

const Product = () => {
  const { title, icon } = product;
  return (
    <section id="product" className="section">
      {/* section title */}
      <div
        className="section-title-group max-w-lg mx-auto px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img src={icon} alt="product" />
        <h2 className="h2 section-title">
          {title} <span className="text-primary-200">.</span>
        </h2>
      </div>
      {/* slider */}
      <div data-aos="fade-up" data-aos-delay="300">
        <ProductSlider />
      </div>
    </section>
  );
};

export default Product;
