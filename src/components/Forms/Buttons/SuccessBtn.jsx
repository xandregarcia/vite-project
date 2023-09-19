const SuccessBtn = ({ label, onClick, submitting }) => {
  return (
    <>
      <button
        type="button"
        className="w-auto bg-green-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2 dark:bg-white dark:border-green-500 dark:hover:bg-green-500"
        onClick={onClick}
        disabled={submitting}
      >
        {label}
      </button>
    </>
  );
};

export default SuccessBtn;
