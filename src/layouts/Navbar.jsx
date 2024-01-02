import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { 
  BiMenuAltRight, 
  BiX,
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
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="uppercase text-6xl flex-gap-10 font-robotoCondensed font-bold text-black md:text-6xl hover:scale-110 transition-transform duration-300">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}

export default Navbar;