import { useState, useEffect } from "react";
import { Link, useLocation  } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { 
  BiMenuAltRight, 
  BiX,
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoGithub,
  BiLogoYoutube,
  BiLogoGoogle,
  BiBook
} from "react-icons/bi";
import logo from '../assets/mai-logo.png';

const navigation = [
  { name: "Homepage", href: "/" },
  { name: "My Projects", href: "/my-projects" },
  { name: "About Me", href: "/about-me" },
  { name: "Contact", href: "/contact" },
];

const MiddleText = () => {
  return (
    <div className="flex items-center">
      <p className="text-white font-semibold md:font-bold text-lg md:text-xl font-robotoCondensed">
        MAI
      </p>
    </div>
  );
};

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const location = useLocation();
  const isPageActive = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    className={`sticky w-full top-0 z-20 bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-200 font-robotoCondensed ${showShadow ? "shadow-sm shadow-gray-800" : ""}`}
    >
      <header className="">
        <nav
          className="flex items-center justify-between py-5 container"
          aria-label="Global">
          <div className="flex lg:flex-1">
          <Link to="/">
              <span className="sr-only font-semibold md:font-bold text-lg md:text-xl font-robotoCondensed">Portfolio</span>
              <img src={logo} alt={logo} className="w-10 md:w-16" />
          </Link>
          </div>
          <MiddleText />
          <div className="flex">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-black"
              onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <BiMenuAltRight className="text-4xl" aria-hidden="true" />
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50 bg-gradient-to-r from-indigo-400 to-blue-900 bg-opacity-15" />
          <Dialog.Panel className="fixed inset-y-0 z-50 w-full h-screen overflow-auto">
            <section className="container h-full">
              <div className="flex justify-end py-10">
                <button
                  type="button"
                  className="hover:scale-110 transition-transform duration-300"
                  onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Close</span>
                  <BiX className="text-4xl" aria-hidden="true" />
                </button>
              </div>
              <div className="flex flex-col justify-center gap-16 items-start md:items-center md:flex-row md:py-24">
                <ul className="space-y-3 md:space-y-6">
                  {navigation.map((item) => (
                    <li key={item.name} className="flex justify-start items-center group/item">
                      <p className={`font-semibold font-robotoOriginal text-xs transform rotate-90 uppercase md:text-lg group/edt ${isPageActive === item.href ? 'visible' : 'invisible group-hover/item:visible'}`}>menu</p>
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="uppercase text-4xl flex-gap-10 font-robotoCondensed font-bold text-black md:text-6xl hover:scale-110 transition-transform duration-300">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <aside className="space-y-2 flex flex-col text-2xl font-semibold relative self-start md:self-end font-robotoOriginal">
                  <a href="mailto: m.ighe@hotmail.com" className="hover:scale-110 transition-transform duration-300">📫 m.ighe@hotmail.com</a>
                  <a href="https://api.whatsapp.com/send?phone=16473739841" className="hover:scale-110 transition-transform duration-300">📞 +1 (647) 373 9841</a>
                  <span className="flex gap-3 text-2xl">
                    <a href="http://facebook.com/katarighe" className="hover:scale-110 transition-transform duration-300"><BiLogoFacebook /></a>
                    <a href="http://instagram.com/m.ighe" className="hover:scale-110 transition-transform duration-300"><BiLogoInstagram /></a>
                    <a href="http://twitter.com/katarighe" className="hover:scale-110 transition-transform duration-300"><BiLogoTwitter /></a>
                    <a href="http://youtube.com/katarighe" className="hover:scale-110"><BiLogoYoutube /></a>
                    <a href="http://linkedin.com/mighe" className="hover:scale-110 transition-transform duration-300"><BiLogoLinkedin /></a>
                    <a href="http://github.com/katarighe" className="hover:scale-110 transition-transform duration-300"><BiLogoGithub /></a>
                    <a href="https://scholar.google.com/citations?user=p_BiBB0AAAAJ" className="hover:scale-110 transition-transform duration-300"><BiLogoGoogle /></a>
                    <a href="https://wellfound.com/u/katarighe" className="hover:scale-110 transition-transform duration-300"><BiBook /></a>
                  </span>
                </aside>
              </div>
            </section>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}

export default Navbar;