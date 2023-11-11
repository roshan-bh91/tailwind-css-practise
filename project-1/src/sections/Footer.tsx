import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="Footer Logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="text-base leading-7 text-white-400 font-montserrat mt-6 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map(({ src, alt }) => (
              <div
                key={alt}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer hover:bg-coral-red"
              >
                <img src={src} alt={alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between gap-20 lg:gap-10 flex-wrap">
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-white font-medium font-montserrat text-2xl leading-normal mb-6">
                {title}
              </h4>
              <ul>
                {links.map(({ name, link }) => (
                  <li
                    key={name}
                    className="font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray mt-3"
                  >
                    <a href={link}>{name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="Copyright sign"
            width={24}
            height={24}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
