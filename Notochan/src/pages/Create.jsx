import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle]=useState('');
  const [content, setContent]=useState('');
  const navigate=useNavigate();
  const handleCreateNote=(e)=>
  {
     e.preventDefault();
     const userEmail=localStorage.getItem('userEmail');

     if(!userEmail)
     {
       alert("You're not logged in!");
       return;
     }

     const notes=JSON.parse(localStorage.getItem('notes')) || [];
     const newNote={
       id:Date.now(),
       title,
       content,
       email:userEmail,
       createdAt:new Date().toISOString(),
     };

     notes.push(newNote);
     localStorage.setItem('notes', JSON.stringify(notes));

     alert("Note created successfully");
     navigate('/my-notes');
  };

  return (
    <div className='max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg '>
      <h2 className='text-2xl font-bold text-[#4B0082] mb-4'>
        📝 Create a Note
      </h2>
      <form onSubmit={handleCreateNote} className='space-y-4'>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} required className='w-full p-2 border rounded  ' />

        <textarea placeholder='Content' value={content} onChange={(e)=>setContent(e.target.value)} required className='w-full p-2 border rounded h-40'></textarea>
        <button type="submit"className='w-full bg-[#4B0082] text-white py-2 rounded hover:bg-indigo-700 transition'>Save Note</button>
      </form>
    </div>
  );
};

export default Create;
