const DangerBtn = ({ label, onClick, submitting }) => {
  return (
    <>
      <button
        type="button"
        className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
        onClick={onClick}
        disabled={submitting}
      >
        {label}
      </button>
    </>
  );
};

export default DangerBtn;
