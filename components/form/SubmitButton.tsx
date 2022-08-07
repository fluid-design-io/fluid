import { useFormikContext } from "formik";

function SubmitButton({ title, slot = "start", ...props }) {
  const { handleSubmit, isValid, errors } = useFormikContext();
  return (
    <div className={`flex justify-center`}>
      {slot === "end" && <div className={`flex-grow`} />}
      <button
        className={`flex-shrink-0 flex justify-center items-center px-4 py-2 text-sm font-medium contrast-more:py-2.5 contrast-more:px-4.5  min-w-[3rem] select-none transition-colors bg-stone-900 text-stone-100 focus:bg-stone-800 hover:bg-stone-800 hover:text-stone-50 focus:text-stone-50 active:bg-stone-700 contrast-more:border contrast-more:border-stone-50 contrast-more:hover:bg-stone-600 contrast-more:focus:bg-stone-600 contrast-more:hover:text-stone-50 dark:bg-stone-600 dark:text-stone-50 dark:hover:bg-stone-500 dark:focus:bg-stone-500 dark:hover:text-stone-50 dark:focus:text-stone-50 dark:active:bg-stone-600 dark:contrast-more:font-bold dark:contrast-more:bg-transparent dark:contrast-more:bg-stone-100 dark:contrast-more:text-stone-900 dark:contrast-more:hover:bg-stone-800 dark:contrast-more:focus:bg-stone-800 dark:contrast-more:border-stone-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-50 focus-visible:ring-offset-transparent dark:focus-visible:ring-offset-stone-50 rounded-md disabled:cursor-not-allowed disabled:opacity-80 disabled:filter disabled:saturate-0`}
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
