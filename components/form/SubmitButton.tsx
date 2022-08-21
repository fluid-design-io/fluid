import { useFormikContext } from "formik";

function SubmitButton({ title, slot = "start", ...props }) {
  const { handleSubmit, isValid, errors } = useFormikContext();
  return (
    <div className={`flex justify-center`}>
      {slot === "end" && <div className={`flex-grow`} />}
      <button
        className={`flex-shrink-0 flex justify-center items-center px-4 py-2 text-sm font-medium contrast-more:py-2.5 contrast-more:px-4.5  min-w-[3rem] select-none transition-colors bg-primary-900 text-primary-100 focus:bg-primary-800 hover:bg-primary-800 hover:text-primary-50 focus:text-primary-50 active:bg-primary-700 contrast-more:border contrast-more:border-primary-50 contrast-more:hover:bg-primary-600 contrast-more:focus:bg-primary-600 contrast-more:hover:text-primary-50 dark:bg-primary-600 dark:text-primary-50 dark:hover:bg-primary-500 dark:focus:bg-primary-500 dark:hover:text-primary-50 dark:focus:text-primary-50 dark:active:bg-primary-600 dark:contrast-more:font-bold dark:contrast-more:bg-transparent dark:contrast-more:bg-primary-100 dark:contrast-more:text-primary-900 dark:contrast-more:hover:bg-primary-800 dark:contrast-more:focus:bg-primary-800 dark:contrast-more:border-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-50 focus-visible:ring-offset-transparent dark:focus-visible:ring-offset-primary-50 rounded-md disabled:cursor-not-allowed disabled:opacity-80 disabled:filter disabled:saturate-0`}
        title={title}
        disabled={!isValid}
        onClick={() => handleSubmit()}
        type="submit"
      >
        {title}
      </button>
      {/* <Text>{JSON.stringify(errors)}</Text> */}
    </div>
  );
}

export default SubmitButton;
