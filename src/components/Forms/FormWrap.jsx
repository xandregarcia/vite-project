const FormWrap = ({
  title,
  subTitle,
  saveLabel,
  onClose,
  closeLabel,
  children,
  onSubmit,
  loading,
  submitting,
}) => {
  return (
    <>
      <div>
        <>
          <div className="tracking-wider leading-loose">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {title}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">{subTitle}</p>
            </div>
            <div className="border-t border-gray-200 h-screen">
              <form
                onSubmit={onSubmit}
                className="space-y-4 text-gray-700 py-4 px-4"
                autoComplete="off"
              >
                {children}
                <div className="flex items-center justify-start md:gap-8 gap-4 pt-5 pb-5">
                  <SaveButton
                    label={saveLabel}
                    loading={loading}
                    submitting={submitting}
                  />
                  {onClose && (
                    <CloseButton
                      label={closeLabel}
                      onClick={onClose}
                      submitting={submitting}
                    />
                  )}
                </div>
              </form>
            </div>
          </div>
        </>
      </div>
    </>
  );
};
export default FormWrap;
