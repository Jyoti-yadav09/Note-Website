import React, {useState} from 'react';

import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const AuthPage = () => {
    const[isLogin, setIsLogin]=useState(true);
   /* const navigate=useNavigate();*/
  return (
    
 <div>
      
    <div className='min-h-screen flex items-center justify-center bg-[#F7F7F7] px-4'>
        
      <div className='bg-white p-8 rounded-2xl shadow-xl w-full max-w-md'>
        <div className='flex justify-center mb-6'>
            <button onClick={()=>setIsLogin(true)}
                className={`px-4 py-2 rounded-l-full ${isLogin?"bg-[#ADD8E6] text-[#4B0082]" : "bg-gray-100"
                }`}
                >Login</button>

            <button onClick={()=>setIsLogin(false)}
                className={`px-4 py-2 rounded-r-full ${!isLogin? "bg-[#ADD8E6] text-[#4B0082]":"bg-gray-100"}`}
                
                >Register</button>
        </div>
         <h2 className='text-2xl font-semibold text-center mb-6 text-[#4B0082]'>
            {isLogin ? "Welcome Back!": "Join NotoChan 📝"}
         </h2>

         <form className='space-y-4'>
            {!isLogin && (<input type="text" placeholder="Full Name"
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300'
            />)}

            <input type="email" placeholder='Email'
             className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300'
            />
            <input type="password" placeholder='Password'
             className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300'
            />

            {!isLogin && (<input type="password" placeholder='Confirm Password'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300'
            />)}

            <button type="submit"
            className='w-full  bg-[#4B0082] text-white py-2 rounded-lg hover:bg-[#5e2ca5] transition'
            >
            
                {isLogin?"Login" : "Register"}
            </button>
         </form>
        
      </div>
    </div>
 
 
    </div>
  );
};

export default AuthPage;

