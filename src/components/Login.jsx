import { useState } from "react";
import Header from "./Header";

const Login = () => {
const [isSignIn, setIsSignIn] = useState(true);
const toggleForm = ()=> {
  setIsSignIn((prev)=>!prev);
}

  return (
    <div>
      <Header />
      <div className='absolute z-1'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg'
          alt='bavkground image'
        />
      </div>
      <form className='absolute bg-black  z-5 w-3/12 rounded-lg mx-auto left-0 right-0 my-auto top-1/3 p-8 m-4 text-gray-100 bg-opacity-80 '>
        <h1 className='font-bold text-2xl py-4 mx-4'>{isSignIn ? "Sign In": "Sign Up"} </h1>
        {!isSignIn && <input
          className='p-4 m-4 w-8/9 bg-gray-800 text-gray-200 rounded-lg'
          type='text'
          placeholder='Full Name'
        />}

        <input
          className='p-4 m-4 w-8/9 bg-gray-800 text-gray-200 rounded-lg'
          type='email'
          placeholder='Email'
        />
        <input
          className='p-4 m-4 w-8/9 bg-gray-800 text-gray-200 rounded-lg'
          type='password'
          placeholder='Password'
        />
        <button className='p-2 m-4 w-8/9 bg-red-800 rounded-lg'>{isSignIn ? "Sign In ":"Sign Up"}</button>
       
          <p className='py-4' onClick={toggleForm}>
          {isSignIn ? "New to Netfix? Sign Up now." : " Sign In" }
          </p>
        
      </form>
    </div>
  );
};

export default Login;
