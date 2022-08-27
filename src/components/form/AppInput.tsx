import { AppFormItem, AppLabel, getInputColor } from '.';
import { useFormikContext } from 'formik';
import React, { useState } from 'react';

function AppInput({ name, ...props }) {
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
      <input
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
        {...props}
      />
    </AppFormItem>
  );
}

export default AppInput;
