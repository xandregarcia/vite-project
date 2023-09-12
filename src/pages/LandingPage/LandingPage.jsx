import { Wrapper } from "../../components/Wrapper";

// import React from "react";
export const LandingPage = () => {
  return (
    <>
      <Wrapper>
        <div className="text-gray-700 bg-white">
          {/* <nav>
          <div className="container mx-auto px-6 py-2 flex justify-between items-center">
            <a href="#" className="font-bold text-2xl lg:text-4xl">
              TAILWIND
            </a>
            <div className="block md:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-gray-500 boder-gray-600 hiver:text-gray-800">
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://wwww.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div className="hidden md:block">
              <ul className="inline-flex">
                <li>
                  <a href="#" className="px-4 font-bold hover:text-gray-800">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="px-4 hover:text-gray-800">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="px-4 hover:text-gray-800">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
          <div className="py-20 hero">
            <div className="container mx-auto px-6">
              <div className="text-4xl font-bold mb-2 text-white">
                Design awesome websites without headaches!
              </div>
              <div className="text-2xl mb-8 text-gray-200">
                A utility-first CSS framework for rapidly building custom
                designs.
              </div>
              <button className="transform hover:scale-110 transition duration-300 ease-in-out bg-white font-bold rounded-full py-6 px-8 shadow-lg uppercase tracking-wider">
                Get Started
              </button>
            </div>
          </div>
          <section className="container mx-auto px-6 py-10">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-0">
              Features
            </h2>
            <div className="flex items-center flex-wrap mb-10">
              <div className="w-full md:w-1/2 px-4">
                <h4 className="text-3xl text-gray-800 font-bold mb-3">
                  Responsive to the core
                </h4>
                <p className="text-gray-600 mb-8">
                  Every Tailwind utility also comes with responsive variants,
                  making it extremely easy to build responsive interfaces
                  without resorting to custom CSS.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <img
                  src="https://cdn.dribbble.com/users/2487395/screenshots/6311129/responsivedesign_2x.png"
                  alt="responsive"
                />
              </div>
            </div>
            <div className="flex items-center flex-wrap mb-20">
              <div className="w-full md:w-1/2 px-4">
                <img
                  src="https://icons8.com/wp-content/uploads/2020/02/tips-on-mobile-UI-design.png"
                  alt="component-friendly"
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <h4 className="text-3xl text-gray-800 font-bold mb-3">
                  Component-friendly
                </h4>
                <p className="text-gray-600 mb-8">
                  While you can do a lot with just utility classNamees, as a
                  project grows it can be useful to codify common patterns into
                  higher level abstractions.
                </p>
              </div>
            </div>
            <div className="flex items-center flex-wrap mb-20">
              <div className="w-full md:w-1/2 px-4">
                <h4 className="text-3xl text-gray-800 font-bold mb-3">
                  Designed to be customized
                </h4>
                <p className="text-gray-600 mb-8">
                  If it makes sense to be customizable, Tailwind lets you
                  customize it. This includes colors, border sizes, font
                  weights, spacing utilities, breakpoints, shadows, and tons
                  more.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-4">
                {/* <img
                src="https://statuscast.com/wp-content/uploads/2018/12/untitled-1@3x.png"
                alt="customizable"
              /> */}
              </div>
            </div>
          </section>
          <section className="bg-gray-100">
            <div className="container mx-auto px-6 py-20">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                Testimonials
              </h2>
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <div className="bg-white rounded shadow py-2">
                    <p className="text-gray-800 text-base px-6 mb-5">
                      Sunt corrupti delectus eaque pariatur dicta magnam, velit
                      possimus cupiditate iusto hic, ullam, error vel odio
                      adipisci! Mollitia molestias sit beatae? Corrupti!
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm px-6">
                      John Doe
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <div className="bg-white rounded shadow py-2">
                    <p className="text-gray-800 text-base px-6 mb-5">
                      Sunt corrupti delectus eaque pariatur dicta magnam, velit
                      possimus cupiditate iusto hic, ullam, error vel odio
                      adipisci! Mollitia molestias sit beatae? Corrupti!
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm px-6">
                      Jane Doe
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <div className="bg-white rounded shadow py-2">
                    <p className="text-gray-800 text-base px-6 mb-5">
                      Sunt corrupti delectus eaque pariatur dicta magnam, velit
                      possimus cupiditate iusto hic, ullam, error vel odio
                      adipisci! Mollitia molestias sit beatae? Corrupti!
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm px-6">
                      James Doe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="call-to-action">
            <div className="container mx-auto px-6 text-center py-10">
              <h2 className="mb-6 text-4xl font-bold text-center text-white">
                Impress them all!
              </h2>
              <h3 className="my-4 text-2xl text-white">
                Build the next generation of design experiences
              </h3>
              <button className="transform hover:scale-110 transition duration-300 ease-in-out bg-white font-bold rounded-full mt-6 py-6 px-8 shadow-lg uppercase tracking-wider">
                Get Started
              </button>
            </div>
          </section>
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
      </Wrapper>
    </>
  );
};
