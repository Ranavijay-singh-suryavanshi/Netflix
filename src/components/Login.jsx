import { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignIn((prev) => !prev);
  };

  const handleClick = () => {
    // Validate the form data
    console.log(password);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);

    // if (!isSignIn) {
    //   const emailVal = email.current?.value;
    //   const passwordVal = password.current?.value;

    //   if (!emailVal || !passwordVal) {
    //     setErrorMsg("Email and password are required.");
    //     return;
    //   }

    //   createUserWithEmailAndPassword(auth, emailVal, passwordVal)
    //     .then((userCredential) => {
    //       const user = userCredential.user;
    //       console.log("User signed up:", user);
    //       setErrorMsg(""); // Clear error on success
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       setErrorMsg(`${errorCode}: ${errorMessage}`);
    //     });
    // }

    // Sign In / Sing Up as per information
    dispatch(
      addUser({
        uid: "1234456",
        email: "ranavijaysingh76@gmail.com",
        displayName: "Ranavijay Singh"
      })
    );
    navigate("/browse");
  };

  return (
    <div>
      <Header />
      <div className='absolute z-1'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg'
          alt='bavkground image'
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute bg-black z-5 w-3/12 rounded-lg mx-auto left-0 right-0 my-auto top-1/3 p-8 m-4 text-gray-100 bg-opacity-80 '>
        <h1 className='font-bold text-2xl py-4 mx-4'>
          {isSignIn ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignIn && (
          <input
            className='p-4 m-4 w-8/9 bg-gray-800 text-gray-200 rounded-lg'
            type='text'
            placeholder='Full Name'
          />
        )}

        <input
          ref={email}
          className='p-4 m-4 w-8/9 bg-gray-800 text-gray-200 rounded-lg'
          type='email'
          placeholder='Email'
        />
        <input
          ref={password}
          className='p-4 m-4 w-8/9 bg-gray-800 text-gray-200 rounded-lg'
          type='password'
          placeholder='Password'
        />
        <p className='mx-4 text-red-500 font-bold text-xl'>
          {errorMsg && errorMsg}
        </p>
        <button
          onClick={handleClick}
          className='p-2 m-4 w-8/9 bg-red-800 rounded-lg'>
          {isSignIn ? "Sign In " : "Sign Up"}
        </button>

        <p className='py-4' onClick={toggleForm}>
          {isSignIn ? "New to Netfix? Sign Up now." : " Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
