import { Wrapper } from "../components/Wrapper";
import "./style.css";
const Login = () => {
  return (
    <>
      <Wrapper>
        <div className="page">
          <main className="px-6 md:px-16 py-6 bg-white bg-opacity-90">
            <div className="w-full max-w-xs mx-auto ">
              <div className="flex flex-nowrap items-center justify-center">
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M11.42 8.29a1.25 1.25 0 0 0-1.13-.76h-4a.65.65 0 0 0-.55.25a.63.63 0 0 0 0 .62l2.73 4.73l-4.3 7.59a.6.6 0 0 0 0 .62a.58.58 0 0 0 .52.28h4a1.22 1.22 0 0 0 1.1-.78l4.36-7.71l-2.73-4.84Zm16.41-5.41a.65.65 0 0 0 0-.62a.61.61 0 0 0-.53-.26h-4.08a1.19 1.19 0 0 0-1.08.77s-8.7 15.43-9 15.93l5.74 10.53A1.26 1.26 0 0 0 20 30h4a.59.59 0 0 0 .54-.26a.62.62 0 0 0 0-.62l-5.69-10.4Z"
                    />
                  </svg>
                </span>
                <h1 className="text-left text-2xl font-semibold">
                  Committee Meeting / Hearing Scheduling System
                </h1>
              </div>
              <form action="" method="post" className="border-b-2 py-3">
                <h1 className="text-lg-mb-2 font-medium">Log in</h1>

                <div className="mb-4">
                  <label className="flex text-gray-700 font-medium text-sm mb-2">
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="juandelacruz@gmail.com"
                  />
                </div>

                <div className="mb-4">
                  <label className="flex text-gray-700 font-medium text-sm mb-2">
                    Password
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="******"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-gray-600 flex items-center">
                    <input
                      className="mr-2 leading-tight"
                      type="checkbox"
                      id="remember"
                    />
                    <span className="text-sm">Remember me</span>
                  </label>
                </div>

                <div>
                  <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded">
                    Log in
                  </button>
                </div>
              </form>

              <div className="mt-2 mb-3">
                {/* <a
                href="#"
                className="text-sm text-teal-500 hover:text-teal-600 hover:underline"
              >
                Sign up
              </a>
              <br /> */}
                <a
                  href="#"
                  className="text-sm text-teal-500 hover:text-teal-600 hover:underline"
                >
                  Forgot your password?
                </a>
                <br />
                <a
                  href="#"
                  className="text-sm text-teal-500 hover:text-teal-600 hover:underline"
                >
                  Don&apos;t have an Account yet?
                </a>
              </div>
              <div className="justify-center mt-2 mb-3">
                <a
                  href="#"
                  className="text-sm mx-2 underline text-gray-800 hover:text-teal-500 hover:underline"
                >
                  Data Privacy
                </a>
                <a
                  href="#"
                  className="text-sm mx-2 underline text-gray-800 hover:text-teal-500 hover:underline"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </main>
        </div>
      </Wrapper>
    </>
  );
};
export default Login;
