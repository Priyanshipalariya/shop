import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import {
  HiArrowNarrowLeft
} from 'react-icons/hi';

const Login = () => {

  function callLogInApi(values) {
    console.log(values.email, values.password)
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required()
  })

  const { handleSubmit, values, handleChange, errors, handleBlur, touched, isValid } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: callLogInApi,
    validationSchema: schema,
  });

  return (

    <div className=" max-w-4xl mx-auto  my-8">
      <Link to="/">
        <HiArrowNarrowLeft className="text-3xl " />
      </Link>

      <form onSubmit={handleSubmit} className="pb-12 bg-white px-4 lg:px-36 lg:py-16">
        <h1 className="text-xl text-gray-600 font-semibold py-5">Login to <span className="italic text-2xl font-bold ">Let's</span> <span className="text-2xl italic font-bold text-rose-600">SHOP</span></h1>

        <div className="border border-gray-300 px-5 pt-3 pb-12 rounded-md">
          <h3 className="text-sm font-semibold pb-2">Username or email address<span className="text-primary-default">*</span></h3>
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

          <h3 className="text-sm font-semibold pb-2 mt-4">Password<span className="text-primary-default">*</span></h3>
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            id="password"
            className="w-full border border-gray-300 h-8 "
            type="password" />

          <div className="h-4">
            {touched.password && errors.password &&
              <div className="text-primary-dark">{errors.password}</div>}
          </div>

          <div className="mt-4 mb-2 flex ">
            <input type="checkbox" />
            <h3 className="text-sm font-bold ml-2 ">Remember me</h3>
          </div>

          <button type="submit" disabled={!isValid}
            className="py-2 px-8 text-white text-md bg-primary-dark rounded-md font-bold disabled:bg-primary-light">
            LOG IN</button>
          <Link to="forgetPassword"> <div className="text-md text-primary-dark mt-2">Lost your password?</div></Link>

       <div className="text-sm text-gray-500 mt-">Don't have an account? <Link to="signUp"><span className="text-primary-dark font-bold mt-2">SIGN UP</span></Link></div>

        </div>

      </form>
    </div>
  );
};

export default Login;