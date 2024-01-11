import Hero from "../components/Hero";
import { IoIosChatboxes } from "react-icons/io";
import "animate.css/animate.min.css";

function Contact() {
  return (
    <>
      <Hero
        name="Contact Me"
        details="Send us your messages!"
        backgroundImage="src/assets/contact-background.jpg"
      />
      <section className="py-20">
        <div className="container">
          <h2 className="font-bold text-2xl mb-1 font-robotoOriginal animate__animated animate__slideInDown">
            If you have an application you are interested in developing, a
            feature that you need built or a project that needs coding. I&apos;d
            love to help with it.
          </h2>
          <form
            action="https://formspree.io/f/mlekylyd"
            method="post"
            className="mt-8 animate__animated animate__slideInRight"
          >
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-4">
              <label htmlFor="name" className="form-control w-full">
                <span className="label-text text-lg font-bold font-robotoCondensed">
                  Name<span className="text-red-500"> * </span>
                </span>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="border-b-2 border-black w-full py-2 text-lg font-robotoCondensed rounded-b-md"
                />
              </label>
              <label htmlFor="email" className="form-control w-full">
                <span className="label-text text-lg font-bold font-robotoCondensed">
                  Email<span className="text-red-500"> * </span>
                </span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="border-b-2 border-black w-full py-2 text-lg font-robotoCondensed rounded-b-md"
                />
              </label>
            </div>
            <label
              htmlFor="message"
              className="form-control w-full mt-10 md:mt-16"
            >
              <span className="label-text text-lg font-bold font-robotoCondensed">
                Message<span className="text-red-500"> * </span>
              </span>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                required
                className="border-b-2 border-black w-full py-2 text-lg font-robotoCondensed rounded-b-md"
              ></textarea>
            </label>
            <div className="flex justify-center items-center mt-16 md:mt-10 md:flex-row">
              <button
                type="submit"
                className="p-3 px-8 text-black bg-gradient-to-r from-blue-500 to-violet-600 text-lg flex justify-center items-center gap-1 rounded-full md:w-fit font-robotoCondensed hover:scale-110 transition-transform duration-300"
              >
                <IoIosChatboxes className="text-2xl" />
                GET IN TOUCH
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
