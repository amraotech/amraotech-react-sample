import React, { useState,useRef, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { providerContext } from "../../providers/Provider";
import axios from 'axios';
import { CookiesProvider, useCookies } from "react-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [auth_token, setAuth_Token] = useState("");
  const [password, setPassword] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [signInFormOpen, setSignInFormOpen] = useState(false); // Add this state
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";
  const { signInUser } = useContext(providerContext);
  const Error_box = useRef(null)
  const Success_box = useRef(null)
  const [cookies, setCookie] = useCookies(["auth_token"]);


  const handleSignIn = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    
    await axios.post(
      import.meta.env.VITE_API_URL+'Auth-api/login/',
      {
        'email': email,
        'password': password
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    ).then((response) => {
      
      // setAuth_Token(response.)
      
      setCookie("auth_token", JSON.stringify(response.data.token), { path: "/" });

      Success_box.current.querySelector('p').innerHTML='Login Success! Redirecting....';
      Success_box.current.classList.remove('hidden');
      setFormLoading(false);
      window.setTimeout(()=>{
        navigate("/dashboard");
      },1000)
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
      },4000)
    });
  };
  
  const reset = () => {
    setEmail("");
  };

  return (
    <>
      <section
        className={`
          ${signInFormOpen ? "hidden md:p-10" : "flex"}
          flex flex-col items-center text-center md:col-span-2 p-10 space-y-5`}
      >
        <h1 className="text-2xl font-semibold">Welcome Back</h1>
        <p>To keep connected with us, please login here</p>
        <button
          onClick={() => setSignInFormOpen(!signInFormOpen)}
          className="bg-dark text-light w-full py-2 rounded-full uppercase font-semibold"
        >
          Sign In
        </button>
      </section>

      <section
        className={`
          ${signInFormOpen ? "flex flex-col md:col-span-3 p-10 md:p-20 bg-light" : "hidden"}
          flex flex-col items-center text-center md:col-span-2 space-y-5`}
      >
        <h1 className="text-2xl font-semibold">Login</h1>
        <form className="flex flex-col gap-2 w-full space-y-2" onSubmit={handleSignIn} action="#" method="post">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative hidden" ref={Error_box} role="alert" >
          <strong id='error_title' className="font-bold">Error ! </strong>
          <span className="block sm:inline" id='error_des' >Nothing.</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          </span>
        </div>
        <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 hidden" role="alert" ref={Success_box}>
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
          <p>Something happened that you should know about.</p>
        </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-2 px-3 rounded-md outline-none bg-dark/5"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-2 px-3 rounded-md outline-none bg-dark/5"
          />
          <button
            type="submit"
            className="bg-dark text-light w-full py-2 rounded-full uppercase font-semibold"
            disabled={formLoading}
          >
            {formLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
