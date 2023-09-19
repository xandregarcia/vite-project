// eslint-disable-next-line react/prop-types
// import Navigation from "./../Navbar";
export const Wrapper = ({ children }) => {
  return (
    <>
      {/* <Navigation /> */}
      <div className="bg-gray-50 bg-opacity-0 min-h-screen dark:bg-gray-800">
        <div className=" w-full mx-auto p-4 md:p-8 lg:p-12">{children}</div>
      </div>

      {/* <div className=" bg-gray-50 bg-opacity-0 min-h-screen">
        <div className="container mx-auto md:p-8 lg:p-12 my-auto">
          {children}
        </div>
      </div> */}
      {/* <div className=" bg-slate-50 "> {children} </div> */}
    </>
  );
};
