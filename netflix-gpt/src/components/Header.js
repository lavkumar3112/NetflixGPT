import React ,{useEffect} from 'react';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGE, USER_IMAGE } from '../utils/constants';
import { signOut,onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user = useSelector(store =>store.user);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);


  const handleSignOut= () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };
  
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid: uid,email:email,displayName: displayName,photoURL:photoURL}));
          navigate("/browse");
          
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
        }
      });
      // unsubscribe when component unmount
      return () => unsubscribe();
    },[]);

  const handleGptSearchClick = () =>{
    //Toggle GPT Search
    dispatch(toggleGptSearchView());

  }
  const handleLanguageChange = (e) => {
    //console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src={NETFLIX_LOGO} alt='logo'/>
        {user && (
          <div className='flex p-2'>
          {showGptSearch && (<select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGE.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option> )}
          </select>)}
          {/* <img className='w-12 h-12' src={user?.photoUrl} alt='usericon'/> */}
          <button className='py-2 px-4 m-2 mx-4 text-white bg-purple-800 rounded-lg' onClick={handleGptSearchClick}>{showGptSearch? "HomePage":"GPT Search"}</button>
          <img className='w-12 h-12' src={USER_IMAGE} alt='usericon'/>
          <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
        </div>
        )}
    </div>
  )
}

export default Header;