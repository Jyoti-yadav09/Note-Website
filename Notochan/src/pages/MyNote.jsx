import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6">📝 My Notes</h2>
        {notes.length === 0 ? (
          <p className="text-gray-500">You haven't created any notes yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {notes.map((note, index) => (
              <div
                key={index}
                onClick={() => setSelectedNote(note)}
                className="cursor-pointer bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
                style={{ height: '180px' }}
              >
                <h3 className="text-xl font-semibold text-indigo-700 mb-2 truncate">{note.title}</h3>
                <p className="text-gray-600 overflow-hidden text-sm line-clamp-4">
                  {note.content}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {selectedNote && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
              <button
                onClick={() => setSelectedNote(null)}
                className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-2xl"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">{selectedNote.title}</h3>
              <p className="text-gray-800 whitespace-pre-line">{selectedNote.content}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyNotes;
