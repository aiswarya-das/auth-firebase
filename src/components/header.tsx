'use client';

import { useUserSession } from '@/hooks/use-user-session';
import { signInWithGoogle, signOutWithGoogle } from '@/libs/firebase/auth';
import { createSession, removeSession } from '@/actions/auth-actions';

export function Header({ session }: { session: string | null }) {
  const userSessionId = useUserSession(session);

  const handleSignIn = async () => {
    const userUid = await signInWithGoogle();
    if (userUid) {
      await createSession(userUid);
    }
  };

  const handleSignOut = async () => {
    await signOutWithGoogle();
    await removeSession();
  };

  if (!userSessionId) {
    return (
      <div className="flex flex-col md:flex-row h-screen w-full bg-[#0a2540]"> {/* Ensure full screen width */}
        <div className="md:block md:w-1/2 h-full">
          <img 
            src="https://plus.unsplash.com/premium_vector-1697729782149-e53d522cb596?q=80&w=1568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Signup Image" 
            className="object-cover h-full w-full" 
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8">
          <div className="text-white mb-auto text-center">Journey to a trillion miles starts from here!!</div>
          <div className="bg-[#123456] mb-auto border-[#0a2540] border-2 rounded-2xl p-8 shadow-md max-w-md w-full">
            <h1 className="text-white text-2xl lg:text-3xl mb-1 text-center font-bold">Sign up</h1>
            <p className="text-white mb-12 text-center">Choose a signup method</p>
            <button 
              onClick={handleSignIn} 
              className="flex items-center justify-center w-full px-6 py-2 mb-4 bg-white text-gray-700 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
            >
              <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google Icon" className="h-6 mr-2" />
              Sign up with Google
            </button>
            <button 
              onClick={handleSignIn} 
              className="flex items-center justify-center w-full px-6 py-2 bg-white text-gray-700 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
            >
              <img src="https://i.pinimg.com/736x/91/28/41/912841506896fdf51b089d4922dc74c3.jpg" alt="Email Icon" className="h-6 mr-2" />
              Sign up with Email
            </button>
            <p className="text-white mt-4 text-center">
              Already a user? <a href="#" className="text-blue-500">Log in</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <header className="bg-[#123456] shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="https://cdn-icons-png.flaticon.com/128/5448/5448415.png" alt="Logo" className="h-14" />
          {/* <nav>
             <ul className="flex space-x-6 text-gray-700">
              <li>
                <a href='#' className="hover:text-blue-600 transition duration-300">Menu A</a>
              </li>
              <li>
                <a href='#' className="hover:text-blue-600 transition duration-300">Menu B</a>
              </li>
              <li>
                <a href='#' className="hover:text-blue-600 transition duration-300">Menu C</a>
              </li>
            </ul> 
          </nav> */}
        </div>
         <button 
          onClick={handleSignOut} 
          className="px-4 py-2 bg-[#123456] text-sky-400/100 rounded-lg shadow-md hover:bg-[#0a2540] transition duration-300 border-2 border-[#0a2540] font-bold"
        >
          Sign Out
        </button> 
      </div>
    </header>
  );
}

export default Header;
