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
import logo from '../assets/react.svg';

const navigation = [
  { name: "Homepage", href: "/" },
  { name: "My Projects", href: "/my-projects" },
  { name: "About Me", href: "/about-me" },
  { name: "Contact", href: "/contact" },
];

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
      className={`bg-new sticky w-full bg-violet-700 transition-all duration-200 font-robotoCondensed
      ${showShadow ? "shadow-md" : ""}`
      }
      id="Home">
      <header>
        <nav
          className="flex items-center justify-between py-4 container"
          aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/">
              <span className="sr-only font-semibold md:font-bold text-lg md:text-xl font-robotoCondensed">Portfolio</span>
              <img src={logo} alt={logo} className="w-10 md:w-16" />
            </a>
          </div>
          <div className="flex">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-white"
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
          <div className="fixed inset-0 z-50 bg-white text-white" />
          <Dialog.Panel className="fixed inset-y-0 z-50 w-full h-screen overflow-auto">
            <section className="container h-full">
              <div className="flex justify-end py-10">
                <button
                  type="button"
                  className=""
                  onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Close</span>
                  <BiX className="text-4xl" aria-hidden="true" />
                </button>
              </div>
              <div className="flex flex-col justify-center gap-16 items-start md:items-center md:flex-row md:py-24">
                <ul className="space-y-3 md:space-y-6">
                  {navigation.map((item) => (
                    <li key={item.name} className="flex justify-start items-center group/item">
                      <p className={`font-semibold font-robotoCondensed text-xs transform rotate-90 uppercase md:text-lg group/edt ${isPageActive ===  item.href ? 'visible' : 'invisible group-hover/item:visible'}`}>⭐</p>
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="uppercase text-4xl font-bold text-black md:text-6xl">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <aside className="space-y-2 flex flex-col text-2xl font-semibold relative self-start md:self-end font-robotoOriginal">
                  <a href="mailto: m.ighe@hotmail.com">m.ighe@hotmail.com</a>
                  <a href="https://api.whatsapp.com/send?phone=16473739841">+1 (647) 373 9841</a>
                  <span className="flex gap-3 text-4xl">
                    <a href="http://facebook.com/katarighe"><BiLogoFacebook /></a>
                    <a href="http://instagram.com/m.ighe"><BiLogoInstagram /></a>
                    <a href="http://twitter.com/katarighe"><BiLogoTwitter /></a>
                    <a href="http://youtube.com/katarighe"><BiLogoYoutube /></a>
                    <a href="http://linkedin.com/mighe"><BiLogoLinkedin /></a>
                    <a href="http://github.com/katarighe"><BiLogoGithub /></a>
                    <a href="https://scholar.google.com/citations?user=p_BiBB0AAAAJ"><BiLogoGoogle /></a>
                    <a href="https://wellfound.com/u/katarighe"><BiBook /></a>
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