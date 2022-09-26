import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  function callLogInApi(values) {
    console.log(values.email)
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
  })

  const { handleSubmit, values, handleChange, errors, handleBlur, touched, isValid } = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: callLogInApi,
    validationSchema: schema,
  });

  return (
    <div className="max-w-4xl mx-auto my-8">

      <form onSubmit={handleSubmit} className="pb-12 mx-2 bg-white px-4 lg:px-16 px-12 lg:py- lg:my-24">

        <h1 className="py-5 text-md text-gray-700">Lost your password? Please enter your Email address. You will receive a link to create a new password via email.</h1>

        <h3 className="text-sm font-semibold pb-2"> Email address<span className="text-primary-default">*</span></h3>
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          id="email-address"
          className="w-full border border-gray-300 h-8"
          type="email" />

        <div className="h-4">
          {touched.email && errors.email &&
            <div className="text-primary-dark">{errors.email}</div>}
        </div>

        <button type="submit" disabled={!isValid}
          className="py-2 px-8 mt-4 text-white text-md bg-primary-dark rounded-md font-bold disabled:bg-primary-light">
          RESET PASSWORD</button>


        <div className="text-sm text-gray-500 mt-2">Back to<Link to="/loginpage"><span className="text-primary-dark font-bold mt-2 mx-1">LOG IN</span></Link></div>


      </form>
    </div>

  );
};

export default ForgetPassword;