import ShopList from "./ShopList";
import { shop } from "../data";

const Shop = () => {
  const { icon, shops, title } = shop;
  return (
    <section id="shop" className="section">
      {/* section title */}
      <div
        className="section-title-group max-w-lg mx-auto px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="100"
      >
        <img src={icon} alt="" className="scale-150 -z-10" />
        <h2 className="h2">
          {title} <span className="text-primary-200">.</span>
        </h2>
      </div>
      {/* plan list */}
      <ShopList shops={shops} />
    </section>
  );
};

export default Shop;
