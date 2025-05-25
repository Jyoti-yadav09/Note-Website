import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';


const Profile = () => {
  const navigate=useNavigate();
  const userToken=localStorage.getItem("userToken");
  const userEmail=localStorage.getItem("userEmail");
  const userName=localStorage.getItem("userName");

  if(!userToken)
  {
     return(
      <div className='p-6 text-center text-gray-600 min-h-screen flex flex-col items-center justify-center bg-gray-100'>
        <h2 className='text-2xl font-bold mb-2'>You are not logged in !</h2>
        <p>Please log in to view your profile.</p>
        <button onClick={()=>
          
             navigate('/AuthPage')}
             className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          
          >
            Go to Login
          </button>
      </div>
     ); 
  }

  return (
    <div className='flex min-h-screen bg-gray-100'>
      {/*Sidebar*/}
      <Sidebar/>

      {/*Main Content */}
      <div className='flex-1 p-8'>
        <div className='max-w-xl mx-auto bg-white shadow-md rounded-lg p-6'>
          <h2 className='text-3xl font-bold mb-6 text-[#4B0082]'>👤 Profile</h2>
          <p className='text-lg mb-2'>
            <strong>Email:</strong> {userEmail}
          </p>
          <button onClick={()=>{
            localStorage.removeItem("userToken");
            localStorage.removeItem("userEmail");
            localStorage.removeItem("userName");
            navigate('/AuthPage');
          }}
           className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>Logout
             </button>
        </div>
      </div>
      
    </div>
  )
}

export default Profile;
