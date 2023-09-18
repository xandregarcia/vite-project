import { Wrapper } from "../components/Wrapper";

const SignUp = () => {
  return (
    <>
      <Wrapper>
        <div className="min-h-screen flex items-center justify-center ">
          <div className="container bg-white p-16 rounded shadow-2xl max-w-lg min-w-max">
            <div className="w-full items-center justify-center block mb-6">
              <button className="relative items-center justify-center bg-white p-2 rounded-md shadow-sm flexw-auto flex hover:bg-blue-300 hover:text-white ">
                <span className=" px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="m8 5l-5 5l5 5" />
                      <path d="M3 10h8c5.523 0 10 4.477 10 10v1" />
                    </g>
                  </svg>
                </span>
                <a href="/login" className="flex text-sm font-medium p-2">
                  Back
                </a>
              </button>
              <h2 className="text-3xl font-bold mb-2 text-gray-800">
                Create your account
              </h2>
              <div className="text-teal-600 mb-4">Sign Up Using your:</div>

              <button className="items-center justify-center bg-white p-2 rounded-md shadow-lg flex w-full hover:bg-blue-300 hover:text-white ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#fff"
                      d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38z"
                    />
                    <path
                      fill="#e33629"
                      d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21z"
                    />
                    <path
                      fill="#f8bd00"
                      d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9z"
                    />
                    <path
                      fill="#587dbd"
                      d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"
                    />
                    <path
                      fill="#319f43"
                      d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4z"
                    />
                  </svg>
                </span>
                <label htmlFor="" className="flex text-xl font-medium p-2">
                  Google Email
                </label>
              </button>
              <div className="mt-8">
                <span className="font-semibold text-lg">OR</span>
              </div>
            </div>
            <form action="" method="post" className="border-b-2 py-3">
              {/* <h1 className="text-2xl mb-2 font-medium">Manually Sign In</h1> */}

              <div className="mb-4">
                <label className="flex text-gray-700 font-medium text-sm mb-2">
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                  type="firstname"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                />
              </div>

              <div className="mb-4">
                <label className="flex text-gray-700 font-medium text-sm mb-2">
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                />
              </div>

              <div className="mb-4">
                <label className="flex text-gray-700 font-medium text-sm mb-2">
                  E-mail
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
                    type="checkbox"
                    id="agree"
                    className="form-checkbox h-5 w-5"
                  />
                  <label htmlFor="agree" className="ml-2 text-gray-500">
                    I agree to the terms and privacy.
                  </label>
                </label>
              </div>

              <div>
                <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded">
                  Create an Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default SignUp;
