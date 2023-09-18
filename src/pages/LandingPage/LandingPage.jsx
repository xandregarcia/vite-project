// import { Wrapper } from "../../components/Wrapper";
import "./style.css";
// import React from "react";
export const LandingPage = () => {
  return (
    <>
      {/* <Wrapper> */}
      <div className="w-auto text-gray-700 bg-slate-50 bg-opacity-40">
        <section className="py-5 bg-gradient-to-b from-teal-200 via-teal-400 to-teal-600">
          <div className="container mx-auto px-6 rounded-xl py-4">
            <div className="mx-auto md:w-3/4 w-full px-4 fadeInUp ">
              <img
                src="./src/assets/DrawKit Vector Illustration Team Work (2).svg"
                alt="responsive"
              />
            </div>
            <div className="text-4xl font-bold mb-2 text-slate-800">
              Meeting / Hearing Scheduling System
            </div>
            <div className="text-2xl mb-8 text-slate-800 text-justify">
              Welcome to the future of meeting and hearing scheduling! Say
              goodbye to the hassle of coordinating dates, times, and locations.
              Our Meeting / Hearing Scheduling System is designed to simplify
              your scheduling process, save you time, and ensure that your
              meetings and hearings run smoothly.
            </div>
            <button className="my-8 transform hover:scale-110 transition duration-300 ease-in-out bg-white text-slate-700 font-bold rounded-full py-4 px-6 shadow-md uppercase tracking-wider">
              Get Started
            </button>
          </div>
        </section>
        <section className="container mx-auto px-6 py-10  bg-white">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-0">
            Features
          </h2>
          <div className="flex items-center flex-wrap mb-10">
            <div className="w-full md:w-1/2 px-4">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                Automated Notifications
              </h4>
              <p className="text-gray-600 mb-8">
                Stay on top of your schedule with automated email reminders and
                notifications. Never miss a meeting or hearing again, and ensure
                all participants are well-informed.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4 fadeInRight">
              <img
                src="./src/assets/DrawKit Vector Illustration Team Work (15).svg"
                alt="responsive"
              />
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-10">
            <div className="w-full md:w-1/2 px-4">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                Customizable Availability
              </h4>
              <p className="text-gray-600 mb-8">
                Tailor your availability to fit your unique schedule. Whether
                you need one-time or recurring meetings, our system allows you
                to set your preferences and avoid scheduling conflicts
                effortlessly.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4 fadeInRight">
              <img
                src="./src/assets/DrawKit Vector Illustration Team Work (16).svg"
                alt="responsive"
              />
            </div>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              Testimonials
            </h2>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 px-2 mb-4 ">
                <div className="bg-white rounded shadow py-2 h-full">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    “Our scheduling process used to be a nightmare, but with
                    this system, it's become a breeze. I can't imagine going
                    back to the old way.”
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    - Sarah H., CEO
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2 h-full">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    “I love the automated reminders. They keep me organized and
                    ensure I never forget a meeting.”
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    - John M., Attorney
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2 h-full">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    Sunt corrupti delectus eaque pariatur dicta magnam, velit
                    possimus cupiditate iusto hic, ullam, error vel odio
                    adipisci! Mollitia molestias sit beatae? Corrupti!
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    - Jane Doe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="call-to-action">
            <div className="container mx-auto px-6 text-center py-10">
              <h2 className="mb-6 text-4xl font-bold text-center text-slate-700">
                Impress them all!
              </h2>
              <h3 className="my-4 text-2xl text-gray-600">
                Build the next generation of design experiences
              </h3>
              <button className="transform hover:scale-110 transition duration-300 ease-in-out bg-white font-bold rounded-full mt-6 py-6 px-8 shadow-lg uppercase tracking-wider">
                Get Started
              </button>
            </div>
          </section> */}
        <footer className="bg-gray-100">
          <div className="container mx-auto px-6 pt-10 pb-6">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/4 text-center md:text-left">
                <h5 className="uppercase mb-6 font-bold">Links</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      Help
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 text-center md:text-left">
                <h5 className="uppercase mb-6 font-bold">Legal</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      Terms
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 text-center md:text-left">
                <h5 className="uppercase mb-6 font-bold">Social</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      Facebook
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 text-center md:text-left">
                <h5 className="uppercase mb-6 font-bold">Company</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      Official Blog
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* </Wrapper> */}
    </>
  );
};
