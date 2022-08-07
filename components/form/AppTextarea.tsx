import { useFormikContext } from "formik";
import React, { useState } from "react";
import { AppFormItem, AppLabel, getInputColor } from ".";
function AppTextarea({ name, ...props }) {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();
  const [focused, setFocused] = useState(false);
  const error = touched[name] ? errors[name] : undefined;
  const label = `${name[0].toUpperCase()}${name.slice(1)}`;
  return (
    <AppFormItem {...{ error, focused }}>
      <AppLabel
        {...{ errors, error, focused, label, name, value: values[name] }}
      />
      <textarea
        {...props}
        className={getInputColor({ error, className: props.className })}
        value={values[name]}
        placeholder={!!error ? label : undefined}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFieldTouched(name);
          setFocused(false);
        }}
        name={name}
      />
    </AppFormItem>
  );
}

export default AppTextarea;
