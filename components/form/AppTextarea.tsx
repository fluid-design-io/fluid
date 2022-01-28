import { useFormikContext } from "formik";
import React, { useState } from "react";
function AppTextarea({ name, ...props }) {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();
  const [focused, setFocused] = useState(false);
  const error = touched[name] ? errors[name] : undefined;
  const label = `${name[0].toUpperCase()}${name.slice(1)}`;
  return (
    <div
      className={`rounded-lg overflow-hidden border relative mb-4 ${
        !!error
          ? "border-red-400"
          : focused
          ? `border-gray-200`
          : `border-transparent`
      }`}
    >
      <label
        className={` ${
          !!error ? `text-red-400` : `text-gray-500`
        } text-xs -mb-1 font-semibold absolute left-4 top-1`}
        htmlFor={name}
      >
        {!!error ? errors[name] : label}
      </label>
      <textarea
        {...props}
        className={`pt-5 pb-1.5 px-4 outline-none bg-white block w-full ${
          props.className ? props.className : ``
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
      />
    </div>
  );
}

export default AppTextarea;
