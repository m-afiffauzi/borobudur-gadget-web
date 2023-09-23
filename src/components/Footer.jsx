import { footer } from "../data";

const Footer = () => {
  const { brand, copyrightTextStart, copyrightTextEnd } = footer;
  return (
    <footer className="bg-neutral-500 h-[125px] px-[20px]">
      <div className="container mx-auto h-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end md:pb-[50px]">
        {/* copyright text start */}
        <p className="text-neutral-300 text-sm">
          {copyrightTextStart}
          <a href="#" className="text-primary-200">
            {brand}
          </a>
        </p>
        {/* copyright text end */}
        <p className="text-neutral-300 text-sm">{copyrightTextEnd}</p>
      </div>
    </footer>
  );
};

export default Footer;
