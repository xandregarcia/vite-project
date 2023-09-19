import classNames from "classnames";

const InputTag = ({
  inputRef = null,
  container,
  label,
  type = "text",
  id,
  name,
  value,
  onChange,
  invalid = false,
  invalidMessage = null,
  disabled = false,
}) => {
  const inputClasses = classNames(
    "w-full h-10 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-base placeholder-gray-600 border rounded-lg focus:shadow-outline",
    {
      "border-blue-300": !invalid,
      "border-red-500": invalid,
    }
  );

  return (
    <>
      <div className={container}>
        <label className="block mb-1 uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
          {label}
        </label>
        <input
          ref={inputRef}
          className={inputClasses}
          type={type}
          id={id}
          name={name}
          value={value || ""}
          onChange={onChange}
          disabled={disabled}
        />
        {invalid && (
          <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {invalidMessage}
          </span>
        )}
      </div>
    </>
  );
};
export default InputTag;
