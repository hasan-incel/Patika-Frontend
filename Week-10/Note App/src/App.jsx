import { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [selectedColor, setSelectedColor] = useState("white");
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleAddNote = () => {
    if (noteText.trim()) {
      setNotes([...notes, { text: noteText, color: selectedColor }]);
      setNoteText("");
    }
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="app">
      <h1>NotesApp</h1>

      <input
        type="text"
        className="search-input"
        placeholder="Search for notes..."
        value={searchText}
        onChange={handleSearchChange}
      />

      <div className="note-container">
        <textarea
          className="note-textarea"
          placeholder="Write your note here..."
          value={noteText}
          onChange={handleInputChange}
        ></textarea>

        <div className="color-buttons">
          {["red", "green", "yellow", "blue", "purple"].map((color) => (
            <button
              key={color}
              className={`color-btn ${color}`}
              onClick={() => handleColorChange(color)}
            ></button>
          ))}
        </div>

        <button className="add-note-btn" onClick={handleAddNote}>
          Add Note
        </button>
      </div>

      <ul className="notes-list">
        {filteredNotes.map((note, index) => (
          <li
            key={index}
            className={`note-item ${note.color}`}
            style={{ backgroundColor: note.color }}
          >
            {note.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
