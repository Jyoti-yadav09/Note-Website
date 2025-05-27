import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';

const MyNote = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold text-[#4B0082] mb-4">📝 My Notes</h2>

        {notes.length === 0 ? (
          <p className="text-gray-500">You haven't created any notes yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-[#4B0082] mb-2">{note.title}</h3>
                <p className="text-gray-700 whitespace-pre-wrap">{note.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyNote;
