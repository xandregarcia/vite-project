import "./style.css";
const Modal = ({ onClose, title }) => {
  return (
    <>
      <div className="modal">
        {/* <div className=" w-full mx-auto overflow-x-hidden overflow-y-auto absolute min-h-screen md:h-full top-4 left-0 right-0 md:inset-0 justify-center items-center bg-slate-800 bg-opacity-50"> */}
        <div className="relative mx-auto py-48 max-w-2xl px-4 h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="bg-white rounded-lg shadow relative dark:bg-teal-500">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-5 rounded-t dark:border-gray-600">
              {/* <h3 className="text-slate-700 text-xl lg:text-2xl font-semibold ">
                {title}
              </h3> */}
              <button
                onClick={() => {
                  onClose(false);
                }}
                type="button"
                className="text-slate-50 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="default-modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className=" space-y-6">
              <p className="text-gray-500 uppercase text-2xl font-semibold leading-relaxed dark:text-slate-100 h-72 overflow-y-auto">
                {title}
              </p>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
              >
                Ok
              </button>
              <button
                onClick={() => {
                  onClose(false);
                }}
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-red-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
export default Modal;
