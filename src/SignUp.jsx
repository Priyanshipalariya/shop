import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';

const SignUp = () => {

    function callSignUpApi(values){
        console.log(values.email, values.password)
      }
        
     const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().min(8).required(),
      fullname: Yup.string().required("This is a required field").min(3, "Too Short!"),
      confirm: Yup.string().required("Please confirm your password"),
    })
    
     const {handleSubmit, values, handleChange, errors, handleBlur, touched, isValid}= useFormik({
      initialValues: {
        email: "",
        password: "",
        fullname: "",
        confirm:"",
      },
      onSubmit: callSignUpApi,
      validationSchema: schema,
     });
    
      return (
    
        <div className=" max-w-4xl mx-auto  my-8">
    
    
        <form  onSubmit={handleSubmit} className="pb-12 bg-white px-4 lg:px-36 lg:py-16">
        <h1 className="text-xl text-gray-600 font-semibold py-5">Sign Up to <span className="italic text-2xl font-bold ">Let's</span> <span className="text-2xl italic font-bold text-rose-600">SHOP</span></h1>
    
        <div className="border border-gray-300 px-5 pt-3 pb-12 rounded-md">
        <h3 className="text-sm font-semibold pb-2 ">Enter your full name<span className="text-primary-default">*</span></h3>
        <input 
        value={values.fullname}
         id="fullname"
         onChange={handleChange}
         onBlur={handleBlur}
         name="fullname" 
         className="w-full border border-gray-300 h-8" 
        type="text"/>

<div className="h-4">
{touched.fullname && errors.fullname && 
        <div className="text-primary-dark">{errors.fullname}</div>}
    </div>

<h3 className="text-sm font-semibold pb-2 mt-4 ">Username<span className="text-primary-default">*</span></h3>
        <input 
         id="user-name" 
         onChange={handleChange} 
         className="w-full border border-gray-300 h-8" 
        type="text"/>

        <h3 className="text-sm font-semibold pb-2 mt-4">Email address<span className="text-primary-default">*</span></h3>
        <input 
        value={values.email} 
        onChange={handleChange} 
        onBlur={handleBlur}
        name="email"
        id="email-address" 
        className="w-full border border-gray-300 h-8" 
        type="email"/>
    
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
        type="password"/>
    
    <div className="h-4">
        {touched.password && errors.password && 
        <div className="text-primary-dark">{errors.password}</div>}
</div>

<h3 className="text-sm font-semibold pb-2 mt-4 ">Confirm Password<span className="text-primary-default">*</span></h3>
        <input 
        value={values.confirm}
        onChange={handleChange} 
        onBlur={handleBlur}
        name="confirm"
         id="confirm" 
         className="w-full border border-gray-300 h-8" 
        type="password"/>
        {touched.confirm && errors.confirm && 
        <div className="text-primary-dark">{errors.confirm}</div>}
    
    <div className="mt-4 mb-2 flex ">
    <input type="checkbox"/>
        <h3  className="text-sm font-bold ml-2 ">Remember me</h3>
        </div>
    
        <button type="submit" disabled={!isValid}
        className="py-2 px-8 text-white text-md bg-primary-dark rounded-md font-bold disabled:bg-primary-light">
         SIGN UP</button>

         <div className="text-sm text-gray-500 mt-2">Already a User? <Link to="/loginpage"><span className="text-primary-dark font-bold mt-2">LOG IN</span></Link></div>

       
        </div>
      
        </form>
        </div>

  );
};

export default SignUp;