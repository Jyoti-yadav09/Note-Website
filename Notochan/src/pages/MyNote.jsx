import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaBell } from "react-icons/fa";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [selectedReminderNoteId, setSelectedReminderNoteId] = useState(null);
  const [reminderTime, setReminderTime] = useState("");

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  
  const openNoteModal = (note) => {
    setSelectedNote(note);
  };

  const closeNoteModal = () => {
    setSelectedNote(null);
  };


  const openReminderModal = (e, noteId) => {
    e.stopPropagation(); 
    setSelectedReminderNoteId(noteId);
    setShowReminderModal(true);

    
    const reminders = JSON.parse(localStorage.getItem("reminders")) || [];
    const existingReminder = reminders.find(r => r.noteId === noteId);
    if (existingReminder) {
      setReminderTime(existingReminder.time);
    } else {
      setReminderTime("");
    }
  };

  const closeReminderModal = () => {
    setShowReminderModal(false);
    setSelectedReminderNoteId(null);
    setReminderTime("");
  };

  
  const saveReminder = () => {
    const reminders = JSON.parse(localStorage.getItem("reminders")) || [];
    
    const filteredReminders = reminders.filter(r => r.noteId !== selectedReminderNoteId);
    
    if (reminderTime) {
      filteredReminders.push({ noteId: selectedReminderNoteId, time: reminderTime });
    }
    localStorage.setItem("reminders", JSON.stringify(filteredReminders));
    closeReminderModal();
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 relative">
        <h2 className="text-2xl font-bold text-[#4B0082] mb-4">📝 My Notes</h2>
        {notes.length === 0 ? (
          <p className="text-gray-500">You haven't created any notes yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => (
              <div
                key={note.id}
                className="bg-white p-4 rounded shadow relative min-h-[150px] cursor-pointer"
                onClick={() => openNoteModal(note)}
              >
                <h3 className="font-bold text-lg text-[#4B0082]">{note.title}</h3>
                <p className="text-sm text-gray-700 mt-2">
                  {note.content.length > 100
                    ? note.content.slice(0, 100) + "..."
                    : note.content}
                </p>
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-indigo-600"
                  onClick={(e) => openReminderModal(e, note.id)}
                  title="Set Reminder"
                >
                  <FaBell />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Note  Modal */}
        {selectedNote && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-md max-w-lg w-full relative">
              <button
                onClick={closeNoteModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-4 text-[#4B0082]">
                {selectedNote.title}
              </h3>
              <p className="text-gray-800 whitespace-pre-wrap">{selectedNote.content}</p>
            </div>
          </div>
        )}

        {/* Reminder Modal */}
        {showReminderModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-md max-w-md w-full relative">
              <button
                onClick={closeReminderModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
              >
                ×
              </button>
              <h3 className="text-lg font-semibold mb-4 text-[#4B0082]">Set Reminder</h3>
              <input
                type="datetime-local"
                value={reminderTime}
                onChange={(e) => setReminderTime(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
              />
              <div className="flex justify-end space-x-4">
                <button
                  onClick={closeReminderModal}
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
