import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaEllipsisV, FaBell } from "react-icons/fa";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [reminderTime, setReminderTime] = useState("");
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    const binNotes = JSON.parse(localStorage.getItem("binNotes")) || [];
    const deletedNote = notes.find((note) => note.id === id);
    localStorage.setItem("notes", JSON.stringify(filteredNotes));
    localStorage.setItem("binNotes", JSON.stringify([...binNotes, deletedNote]));
    setNotes(filteredNotes);
    setMenuOpenId(null);
  };

  const archiveNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    const archivedNotes = JSON.parse(localStorage.getItem("archivedNotes")) || [];
    const archivedNote = notes.find((note) => note.id === id);
    localStorage.setItem("notes", JSON.stringify(filteredNotes));
    localStorage.setItem("archivedNotes", JSON.stringify([...archivedNotes, archivedNote]));
    setNotes(filteredNotes);
    setMenuOpenId(null);
  };

  const openReminderModal = (id) => {
    setSelectedNoteId(id);
    setShowReminderModal(true);
    setMenuOpenId(null);
  };

  const saveReminder = () => {
    const reminders = JSON.parse(localStorage.getItem("reminders")) || [];
    const newReminder = { noteId: selectedNoteId, time: reminderTime };
    localStorage.setItem("reminders", JSON.stringify([...reminders, newReminder]));
    setShowReminderModal(false);
    setReminderTime("");
    setSelectedNoteId(null);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold text-[#4B0082] mb-4">📝 My Notes</h2>
        {notes.length === 0 ? (
          <p className="text-gray-500">You haven't created any notes yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => (
              <div key={note.id} className="bg-white p-4 rounded shadow relative h-48 overflow-hidden">
                <h3 className="font-bold text-lg text-[#4B0082]">{note.title}</h3>
                <p className="text-sm text-gray-700 mt-2">{note.content}</p>
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-indigo-600"
                  onClick={() => setMenuOpenId(menuOpenId === note.id ? null : note.id)}
                >
                  <FaEllipsisV />
                </button>
                {menuOpenId === note.id && (
                  <div className="absolute top-8 right-2 bg-white border rounded shadow-md z-10 w-36">
                    <button
                      onClick={() => openReminderModal(note.id)}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-indigo-100 w-full text-left"
                    >
                      <FaBell /> Reminder
                    </button>
                    <button
                      onClick={() => archiveNote(note.id)}
                      className="px-4 py-2 hover:bg-indigo-100 w-full text-left"
                    >
                      Archive
                    </button>
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="px-4 py-2 hover:bg-red-100 w-full text-left text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {showReminderModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-md w-80">
              <h3 className="text-lg font-semibold mb-4 text-[#4B0082]">Set Reminder</h3>
              <input
                type="datetime-local"
                value={reminderTime}
                onChange={(e) => setReminderTime(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
              />
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowReminderModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={saveReminder}
                  className="px-4 py-2 bg-[#4B0082] text-white rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyNotes;
