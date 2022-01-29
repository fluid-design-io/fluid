import { useFormikContext } from "formik";
import React, { useState } from "react";
function AppInput({ name, ...props }) {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();
  const [focused, setFocused] = useState(false);
  const error = touched[name] ? errors[name] : undefined;
  const label = `${name[0].toUpperCase()}${name.slice(1)}`;
  return (
    <div
      className={`rounded-lg overflow-hidden border relative mb-4 ${
        !!error
          ? "border-red-400 prefers-contrast:border-red-500 dark:prefers-contrast:border-red-300"
          : focused
          ? `border-stone-200 prefers-contrast:border-stone-800 dark:prefers-contrast:border-amber-800`
          : `border-transparent prefers-contrast:border-stone-800 dark:prefers-contrast:border-stone-200`
      }`}
    >
      <label
        className={` ${
          focused
            ? !!error
              ? "text-red-400 prefers-contrast:text-stone-50"
              : `text-stone-500 dark:text-stone-400 prefers-contrast:text-stone-900`
            : !!error
            ? `text-red-400  prefers-contrast:text-red-500 dark:prefers-contrast:text-red-300`
            : `text-stone-500 dark:text-stone-400 prefers-contrast:text-stone-900 dark:prefers-contrast:text-stone-50`
        } text-xs -mb-1 font-semibold absolute left-4 top-1`}
        htmlFor={name}
      >
        {!!error ? errors[name] : label}
      </label>
      <input
        className={`bg-none pt-5 pb-1.5 px-4 outline-none block bg-white dark:bg-stone-900 dark:prefers-contrast:bg-black  w-full dark:text-stone-200 dark:prefers-contrast:text-stone-50 transition prefers-contrast:placeholder:text-stone-700 prefers-contrast:focus-within:placeholder:text-stone-50 dark:prefers-contrast:placeholder:text-stone-50/75 ${
          !!error
            ? `prefers-contrast:focus-within:bg-red-500 dark:prefers-contrast:focus-within:bg-red-600`
            : `prefers-contrast:focus-within:bg-amber-400 dark:prefers-contrast:focus-within:bg-amber-300 dark:prefers-contrast:focus-within:text-stone-900`
        }`}
        value={values[name]}
        placeholder={label}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFieldTouched(name);
          setFocused(false);
        }}
        name={name}
        {...props}
      />
    </div>
  );
}

export default AppInput;
