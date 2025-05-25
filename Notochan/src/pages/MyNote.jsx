import React, { useEffect, useState } from 'react';

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const allNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const userEmail = localStorage.getItem('userEmail');

    if (userEmail) {
      const userNotes = allNotes.filter(note => note.email === userEmail);
      setNotes(userNotes);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold text-[#4B0082] mb-6">📚 My Notes</h2>
      {notes.length === 0 ? (
        <p className="text-gray-500">You haven't created any notes yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((note) => (
            <div key={note.id} className="bg-white p-4 shadow rounded">
              <h3 className="text-xl font-semibold text-[#4B0082]">{note.title}</h3>
              <p className="mt-2 text-gray-700 whitespace-pre-wrap">{note.content}</p>
              <p className="text-sm text-gray-400 mt-4">
                Created at: {new Date(note.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyNotes;
