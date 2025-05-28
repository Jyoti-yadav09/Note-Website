import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';

const Remainder = () => {
  const [reminders, setReminders] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedReminders = JSON.parse(localStorage.getItem('reminders')) || [];
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setReminders(storedReminders);
    setNotes(storedNotes);
  }, []);

  // Find note details by noteId
  const getNoteById = (id) => notes.find(note => note.id === id);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold text-[#4B0082] mb-6">⏰ Reminders</h2>
        {reminders.length === 0 ? (
          <p className="text-gray-500">No reminders set yet.</p>
        ) : (
          <div className="space-y-4">
            {reminders.map((reminder, index) => {
              const note = getNoteById(reminder.noteId);
              if (!note) return null; // Skip if note not found
              return (
                <div key={index} className="bg-white p-4 rounded shadow-md">
                  <h3 className="font-semibold text-[#4B0082]">{note.title}</h3>
                  <p className="text-gray-700 mb-2">{note.content}</p>
                  <p className="text-sm text-gray-500">
                    Reminder set for: {new Date(reminder.time).toLocaleString()}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Remainder;
