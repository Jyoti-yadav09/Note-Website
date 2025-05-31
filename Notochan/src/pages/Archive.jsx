import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const Archive = () => {
  const [archivedNotes, setArchivedNotes] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("archivedNotes")) || [];
    setArchivedNotes(stored);
  }, []);

  const unarchiveNote = (id) => {
    const updatedArchived = archivedNotes.filter((note) => note.id !== id);
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const noteToUnarchive = archivedNotes.find((note) => note.id === id);
    localStorage.setItem("archivedNotes", JSON.stringify(updatedArchived));
    localStorage.setItem("notes", JSON.stringify([...notes, noteToUnarchive]));
    setArchivedNotes(updatedArchived);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold text-[#4B0082] mb-4">📦 Archived Notes</h2>
        {archivedNotes.length === 0 ? (
          <p className="text-gray-500">You don't have any archived notes.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {archivedNotes.map((note) => (
              <div key={note.id} className="bg-white p-4 rounded shadow h-48 overflow-hidden relative">
                <h3 className="font-bold text-lg text-[#4B0082]">{note.title}</h3>
                <p className="text-sm text-gray-700 mt-2">{note.content}</p>
                <button
                  onClick={() => unarchiveNote(note.id)}
                  className="absolute bottom-2 right-2 text-sm text-indigo-600 hover:underline"
                >
                  Unarchive
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Archive;
