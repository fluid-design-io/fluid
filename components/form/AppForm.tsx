import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Formik } from "formik";
import React, { useRef } from "react";

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  const hcaptchaRef = useRef(null);
  const onValidateCaptcha = () => {
    // Execute the hCaptcha when the form is submitted
    hcaptchaRef.current.execute();
  };
  const handleCaptcha = async ({ values, resetForm, captchaCode }) => {
    console.log(values);
    try {
      const response = await fetch("/api/validate-hCaptcha", {
        method: "POST",
        body: JSON.stringify({ email: values.email, captcha: captchaCode }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // If the response is ok than show the success alert
        alert("Thank you! Your form has been submitted!");
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error?.message || "Something went wrong");
    } finally {
      // Reset the hCaptcha when the request has failed or succeeeded
      // so that it can be executed again if user submits another email.
      resetForm();
      onSubmit(values);
      //console.log(captchaCode, 'should submit now!');
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onValidateCaptcha}
      validationSchema={validationSchema}
    >
      {({ values, resetForm }) => (
        <>
          {children}
          <HCaptcha
            id="hcaptcha-area"
            size="invisible"
            ref={hcaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
            onVerify={(captchaCode) =>
              handleCaptcha({ values, resetForm, captchaCode })
            }
          />
        </>
      )}
    </Formik>
  );
}

export default AppForm;
