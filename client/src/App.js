import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get("/api/diary");
      setEntries(response.data);
    } catch (error) {
      console.error("Error fetching entries:", error.message);
    }
  };

  const createEntry = async (e) => {
    e.preventDefault();

    if (title.trim() === "" || content.trim() === "") {
      return;
    }

    try {
      const response = await axios.post("/api/diary", {
        title,
        content,
      });

      setEntries([response.data, ...entries]);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating entry:", error.message);
    }
  };

  return (
    <div className="App">
      <h1>My Diary</h1>
      <form onSubmit={createEntry}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Add Entry</button>
      </form>
      <div className="entries">
        {entries.map((entry) => (
          <div key={entry._id} className="entry">
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
