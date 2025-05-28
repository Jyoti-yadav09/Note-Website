import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaBell, FaTrash } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [reminderTime, setReminderTime] = useState("");
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState(null); 

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  const openNoteModal = (note) => {
    setSelectedNote(note);
    setShowNoteModal(true);
  };

  const openReminderModal = (noteId) => {
    setSelectedNoteId(noteId);
    setShowReminderModal(true);
    setMenuOpenId(null); 
  };

  const saveReminder = () => {
    const storedReminders = JSON.parse(localStorage.getItem("reminders")) || [];
    const newReminder = {
      noteId: selectedNoteId,
      time: reminderTime,
    };
    const updated = [...storedReminders, newReminder];
    localStorage.setItem("reminders", JSON.stringify(updated));
    setShowReminderModal(false);
    setReminderTime("");
    setSelectedNoteId(null);
  };

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter(note => note.id !== noteId);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setMenuOpenId(null); 
  };

  const toggleMenu = (noteId) => {
    setMenuOpenId(menuOpenId === noteId ? null : noteId);
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
              <div
                key={note.id}
                className="bg-white p-4 rounded shadow relative h-48 overflow-hidden cursor-pointer"
                onClick={() => openNoteModal(note)}
              >
                <h3 className="font-bold text-lg text-[#4B0082]">{note.title}</h3>
                <p className="text-sm text-gray-700 mt-2 line-clamp-4">{note.content}</p>

                {/* Three Dots Menu */}
                <div
                  className="absolute top-2 right-2"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    toggleMenu(note.id);
                  }}
                >
                  <BsThreeDotsVertical className="text-gray-600 hover:text-indigo-600 cursor-pointer" />
                  {menuOpenId === note.id && (
                    <div className="absolute right-0 mt-2 bg-white shadow-lg rounded w-32 z-50">
                      <button
                        className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
                        onClick={() => openReminderModal(note.id)}
                      >
                        <FaBell className="mr-2" /> Set Reminder
                      </button>
                      <button
                        className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 text-left text-red-500"
                        onClick={() => deleteNote(note.id)}
                      >
                        <FaTrash className="mr-2" /> Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Note Modal */}
        {showNoteModal && selectedNote && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-md max-w-lg w-full">
              <h3 className="text-xl font-bold text-[#4B0082] mb-2">{selectedNote.title}</h3>
              <p className="text-gray-700">{selectedNote.content}</p>
              <div className="mt-4 text-right">
                <button
                  className="bg-[#4B0082] text-white px-4 py-2 rounded"
                  onClick={() => setShowNoteModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reminder Modal */}
        {showReminderModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-md w-80">
              <h3 className="text-lg font-semibold mb-4 text-[#4B0082]">Set Reminder</h3>
              <input
                type="datetime-local"
                value={reminderTime}
                onChange={(e) => setReminderTime(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
              />
              <div className="flex justify-end space-x-4">
                <button onClick={() => setShowReminderModal(false)} className="px-4 py-2 bg-gray-300 rounded">
                  Cancel
                </button>
                <button onClick={saveReminder} className="px-4 py-2 bg-[#4B0082] text-white rounded">
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
