// import aos
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Product from "./components/Product";
import Shop from "./components/Shop";
import Review from "./components/Review";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  // aos initialization
  Aos.init({
    duration: 1000,
    delay: 400,
  });
  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <Banner />
      <About />
      <Product />
      <Shop />
      <Review />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
