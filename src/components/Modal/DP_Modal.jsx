import "./style.css";
const DP_Modal = ({ onClose, title }) => {
  return (
    <>
      <div className="modal">
        {/* <div className=" w-full mx-auto overflow-x-hidden overflow-y-auto absolute min-h-screen md:h-full top-4 left-0 right-0 md:inset-0 justify-center items-center bg-slate-800 bg-opacity-50"> */}
        <div className="relative mx-auto py-48 max-w-2xl px-4 h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="bg-white rounded-lg shadow relative dark:bg-teal-500">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-slate-700 text-xl lg:text-2xl font-semibold ">
                {title}
              </h3>
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
            <div className="p-6 space-y-6">
              <p className="text-gray-500 text-base leading-relaxed dark:text-slate-100 h-72 overflow-y-auto">
                <ul className="list-none text-justify">
                  <li className="mb-2">
                    <strong>1. Introduction </strong>At Sangguniang
                    Panlalawigan, we are committed to protecting the privacy and
                    security of your personal information. This Data Privacy
                    Policy outlines how we collect, use, disclose, and protect
                    your data. By using our products and services, you consent
                    to the practices described in this policy.
                  </li>
                  <li className="mb-2">
                    <strong>2. Information We Collect </strong> We may collect
                    various types of information, including but not limited to:
                    Personal Information: Name, email address, phone number, and
                    other contact details. Account Information: Username,
                    password, and other authentication data. Payment
                    Information: Credit card or other payment details for
                    transactions. Usage Information: Data on how you use our
                    products and services. Device Information: Information about
                    the device you use to access our services. Location
                    Information: If you enable location services, we may collect
                    location data.{" "}
                  </li>
                  <li className="mb-2">
                    <strong>3. How We Use Your Information</strong> We use your
                    data for the following purposes: To provide and improve our
                    products and services. To process transactions and provide
                    customer support. To send updates, newsletters, and
                    promotional materials. To personalize your experience and
                    recommend relevant content. To maintain the security and
                    integrity of our systems.
                  </li>
                  <li className="mb-2">
                    <strong> 4. Data Sharing and Disclosure </strong>We may
                    share your information with: Service Providers: Third-party
                    companies that help us provide our services. Legal
                    Requirements: When required by law, we may disclose your
                    data to comply with legal obligations. Business Transfers:
                    In the event of a merger, acquisition, or sale, your data
                    may be transferred to the acquiring entity.{" "}
                  </li>
                  <li className="mb-2">
                    <strong>5. Your Rights</strong>You have the following rights
                    regarding your data: Access: Request access to the personal
                    data we hold about you. Correction: Request correction of
                    inaccurate or incomplete data. Deletion: Request the
                    deletion of your data. Objection: Object to the processing
                    of your data for specific purposes. Data Portability:
                    Request to receive your data in a structured,
                    machine-readable format.
                  </li>
                  <li className="mb-2">
                    <strong> 6. Security We implement</strong> security measures
                    to protect your data from unauthorized access and use.
                    However, no system is completely secure, and we cannot
                    guarantee the absolute security of your data.
                  </li>
                  <li className="mb-2">
                    <strong>7. Cookies and Similar Technologies</strong> We may
                    use cookies and similar technologies to enhance your
                    experience and collect usage data. You can manage your
                    cookie preferences through your browser settings.
                  </li>
                  <li className="mb-2">
                    <strong>8. Changes to this Policy</strong> We may update
                    this Data Privacy Policy to reflect changes in our
                    practices. When we make significant changes, we will notify
                    you through appropriate channels.
                  </li>
                  <li className="mb-2">
                    <strong>9. Contact Us </strong>If you have any questions,
                    concerns, or requests related to your data privacy, please
                    contact us at [Your Contact Information].
                  </li>
                </ul>
              </p>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={() => {
                  onClose(false);
                }}
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
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
export default DP_Modal;
