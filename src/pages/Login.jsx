import { Wrapper } from "../components/Wrapper";
const Login = () => {
  return (
    <>
      <Wrapper>
        <main className="main bg-white px-6 md:px-16 py-6">
          <div className="w-full max-w-xs mx-auto">
            <form action="" method="post" className="border-b-2 py-3">
              <h1 className="text-xl mb-2">Log in</h1>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">
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
                <label className="block text-gray-700 text-sm mb-2">
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
              <a
                href="#"
                className="text-sm text-teal-500 hover:text-teal-600 hover:underline"
              >
                Sign up
              </a>
              <br />
              <a
                href="#"
                className="text-sm text-teal-500 hover:text-teal-600 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
};
export default Login;
