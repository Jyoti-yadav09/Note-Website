import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const Bin = () => {
  const [binNotes, setBinNotes] = useState([]);

  useEffect(() => {
    const storedBin = JSON.parse(localStorage.getItem("binNotes")) || [];
    setBinNotes(storedBin);
  }, []);

  const restoreNote = (id) => {
    const filteredBin = binNotes.filter((note) => note.id !== id);
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const noteToRestore = binNotes.find((note) => note.id === id);
    localStorage.setItem("binNotes", JSON.stringify(filteredBin));
    localStorage.setItem("notes", JSON.stringify([...notes, noteToRestore]));
    setBinNotes(filteredBin);
  };

  const deletePermanently = (id) => {
    const filteredBin = binNotes.filter((note) => note.id !== id);
    localStorage.setItem("binNotes", JSON.stringify(filteredBin));
    setBinNotes(filteredBin);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold text-[#4B0082] mb-4">🗑️ Bin</h2>
        {binNotes.length === 0 ? (
          <p className="text-gray-500">Your bin is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {binNotes.map((note) => (
              <div key={note.id} className="bg-white p-4 rounded shadow h-48 overflow-hidden relative">
                <h3 className="font-bold text-lg text-[#4B0082]">{note.title}</h3>
                <p className="text-sm text-gray-700 mt-2">{note.content}</p>
                <div className="absolute bottom-2 right-2 flex space-x-2">
                  <button
                    onClick={() => restoreNote(note.id)}
                    className="text-indigo-600 hover:underline text-sm"
                  >
                    Restore
                  </button>
                  <button
                    onClick={() => deletePermanently(note.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bin;
