import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";

const NotesMaker = () => {
  const [notes, setNotes] = useState([]);
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addOrUpdateNote = () => {
    if (topic && content) {
      if (editIndex !== null) {
        const updatedNotes = [...notes];
        updatedNotes[editIndex] = { topic, content };
        setNotes(updatedNotes);
        setEditIndex(null);
      } else {
        setNotes([...notes, { topic, content }]);
      }
      setTopic("");
      setContent("");
      setShowForm(false);
    }
  };

  const editNote = (index) => {
    setTopic(notes[index].topic);
    setContent(notes[index].content);
    setEditIndex(index);
    setShowForm(true);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const downloadNote = (note) => {
    const doc = new jsPDF();
    doc.text(`Topic: ${note.topic}`, 10, 10);
    doc.text(`Content: ${note.content}`, 10, 20);
    doc.save(`${note.topic || "note"}.pdf`);
  };

  return (
    <div className="relative">
      {/* Sticky Buttons */}
      <button
        className="btn btn-primary fixed bottom-4 left-4 z-50"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Close Note Maker" : "Open Note Maker"}
      </button>

      <button
        className="btn btn-secondary fixed bottom-4 right-4 z-50"
        onClick={() => setShowNotes(!showNotes)}
      >
        {showNotes ? "Close Notes" : "Your Notes"}
      </button>

      {/* Note Maker Form */}
      {showForm && (
        <div className="fixed bottom-16 left-4 right-4 p-4 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold">
            {editIndex !== null ? "Edit Note" : "Add Note"}
          </h2>
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text">Topic</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter topic"
            />
          </div>
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text">Content</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter content"
            />
          </div>
          <button
            className="btn btn-success mt-4 w-full"
            onClick={addOrUpdateNote}
          >
            {editIndex !== null ? "Update Note" : "Add Note"}
          </button>
        </div>
      )}

      {/* Notes List */}
      {showNotes && (
        <div className="fixed bottom-16 left-4 right-4 p-4 bg-gray-100 rounded-lg shadow-lg max-h-[50vh] overflow-y-auto">
          <h2 className="text-lg font-bold">Your Notes</h2>
          <div className="mt-4 space-y-4">
            {notes.length === 0 ? (
              <p className="text-gray-500">No notes available.</p>
            ) : (
              notes.map((note, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg bg-white shadow-sm flex justify-between items-start"
                >
                  <div>
                    <h3 className="font-bold">{note.topic}</h3>
                    <p className="mt-2">{note.content}</p>
                  </div>
                  <div className="space-x-2">
                    <button
                      className="btn btn-sm btn-info"
                      onClick={() => editNote(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => downloadNote(note)}
                    >
                      Download
                    </button>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => deleteNote(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesMaker;
