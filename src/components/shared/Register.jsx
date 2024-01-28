import React, { useRef,useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify"; 
import { providerContext } from "../../providers/Provider";
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { CookiesProvider, useCookies } from "react-cookie";
import axios from 'axios';

const Register = () => {
  const [isSignInFormOpen, setSignInFormOpen] = useState(false);
  const { createUser } = useContext(providerContext);
  const [error, setError] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";
  const [cookies, setCookie] = useCookies(["auth_token"]);
  const Error_box = useRef(null)
  const Success_box = useRef(null)
  const handleInputChange = (e) => {
    // Handle input changes if needed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (e.target.password.value !== e.target.confirm.value) {
      setError("Your password did not match");
      return;
    }

    const { name, email, password, confirm } = e.target.elements;

    
    setFormLoading(true);
    
    let username_= name.value;
    let email_= email.value;
    let password_= password.value;
    let password2_= confirm.value;
    let isClient_= false;
    let isJobSeeker_= true;
    


    
    const response =axios.post(
      import.meta.env.VITE_API_URL+'Auth-api/register/',
      {
        'username': username_,
        'email': email_,
        'password': password_,
        'password2':password2_,
        'is_client': isClient_,
        'is_job_seeker': isJobSeeker_
      }
    ).then((response) => {
      Success_box.current.querySelector('p').innerHTML='Regestration Success! Redirecting....';
      Success_box.current.classList.remove('hidden');
      setFormLoading(false);
      window.setTimeout(()=>{
        navigate("/dashboard");
      },1000);
      console.log(response);
    }, (error) => {
      setFormLoading(false);
      let errors=error.response.data.errors
      let error_key=Object.keys(errors)[0]
      errors=errors[error_key]
      Error_box.current.querySelector('#error_des').innerHTML=errors;
      Error_box.current.classList.remove('hidden');
      window.setTimeout(()=>{
        Error_box.current.classList.add('hidden')
      },4000);
    });
    
    
    console.log("Registration Successful");

    setError("");
  
    setFormLoading(false);
    
  };

  return (
    <>
      {/* User Register */}
      <section
        className={`
          ${isSignInFormOpen ? 'flex md:col-span-2 p-10 md:pr-10 py-20' : 'hidden'}
          flex flex-col items-center text-center md:col-span-2 space-y-5`}
      >
        <h1 className="text-2xl font-semibold">Register Today</h1>

        <p>To keep connected with us please register here</p>
        <button
          onClick={() => setSignInFormOpen(!isSignInFormOpen)}
          className="bg-dark text-light w-full py-2 rounded-full uppercase font-semibold"
        >
          Register
        </button>
      </section>

      {/* User Register Form */}
      <section
        className={`${
          isSignInFormOpen ? 'md:col-span-2 hidden' : 'flex'
        } flex flex-col items-center md:col-span-3 bg-light w-full h-full p-10 space-y-4`}
      >
        <h1 className="text-2xl font-semibold">Create Account</h1>
        <div className="flex gap-5">
          <Facebook />
          <Linkedin />
          <Twitter />
        </div>

        <p className="opacity-60">or use your email for registration</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full space-y-2">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative hidden" ref={Error_box} role="alert" >
            <strong id='error_title' className="font-bold">Error !</strong>
            <span className="block sm:inline" id='error_des' >Nothing.</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            </span>
          </div>
          <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 hidden" role="alert" ref={Success_box}>
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
            <p>Something happened that you should know about.</p>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="py-2 px-3 rounded-md outline-none bg-dark/5"
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="py-2 px-3 rounded-md outline-none bg-dark/5"
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="py-2 px-3 rounded-md outline-none bg-dark/5"
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            className="py-2 px-3 rounded-md outline-none bg-dark/5"
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-dark text-light w-full py-2 rounded-full uppercase font-semibold"
            disabled={formLoading}
          >
            {formLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </section>
    </>
  );
};

export default Register;
