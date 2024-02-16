import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { NETFLIX_BG_IMAGE } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const [isSignInForm , setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const name=useRef(null);
    const phone=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    
    

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    };
    const handleButtonClick = () =>{
      //Validate the Form data
      const message=checkValidData(email.current.value,password.current.value);
      setErrorMessage(message);

      if(message) return;
  
      // Sign/Sign Up Logic
      if(!isSignInForm){
        //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/60875726?u=1efb3db98755248491576c7ec061ecbbfe134c52&v=4"
              }).then(() => {
                // Profile updated!
                const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatch(addUser({uid: uid,email:email,displayName: displayName,photoURL:photoURL}))
                navigate("/browse");
              }).catch((error) => {
                // An error occurred
                // ...
              });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

      }else{
        //Sign In Logic
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-"+ errorMessage);
          });
      }


    };

  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src={NETFLIX_BG_IMAGE} alt='logo'/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
            {!isSignInForm && <input ref={phone} type='number' placeholder='Phone Number' className='p-4 my-4 w-full bg-gray-700'/>}
            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
            <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now":"Already Regisered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login;