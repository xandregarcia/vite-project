import FormWrap from "./FormWrap";

const Form = ({
  title,
  subTitle,
  isNew,
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  isValid,
  isSubmitting,
  isLoading,
  setFieldValue,
  setFieldTouched,
  setFileReplaced,
  setFieldError,
}) => {
  return (
    <>
      <div>
        <FormWrap
          title={title}
          subTitle={subTitle}
          saveLabel={isNew ? "Save" : "Update"}
          onClose={handleCancel}
          closeLabel={isNew ? "Cancel" : "Close"}
          onSubmit={handleSubmit}
          loading={isLoading}
          submitting={isSubmitting}
        >
          <div className="flex flex-wrap space-y-4 md:space-y-0"></div>
        </FormWrap>
      </div>
    </>
  );
};
export default Form;
