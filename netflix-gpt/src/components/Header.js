import React ,{useEffect} from 'react';
import { NETFLIX_LOGO, USER_IMAGE } from '../utils/constants';
import { signOut,onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user = useSelector(store =>store.user);

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

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src={NETFLIX_LOGO} alt='logo'/>
        {user && (<div className='flex p-2'>
          {/* <img className='w-12 h-12' src={user?.photoUrl} alt='usericon'/> */}
          <img className='w-12 h-12' src={USER_IMAGE} alt='usericon'/>
          <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
        </div>
        )}
    </div>
  )
}

export default Header;