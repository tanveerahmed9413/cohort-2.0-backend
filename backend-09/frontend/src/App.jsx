import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const [notes, setnotes] = useState([]);


  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')


 

  // fetchNotes

  function fetchNotes() {
    axios
      .get("http://localhost:3000/api/notes")
      .then((res) => {
        setnotes(res.data.note);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  // create notes
  function handleForm(e) {
    e.preventDefault();

   

    axios
      .post("http://localhost:3000/api/notes", {
        title,description
      })
      .then((res) => {
        fetchNotes(),
          settitle('')
          setdescription('')
      });
  }

  // delete notes
  function handleDeleteNote(noteId) {
    axios.delete("http://localhost:3000/api/notes/" + noteId).then((res) => {
      fetchNotes();
    });
  }



  return (
    <div>
      <div>
        <form onSubmit={handleForm}>
          <input
          type="text"
          placeholder="enter title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="enter description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />

          <button>submit</button>
        </form>
      </div>

      <div className="notes">
        {notes.map((note, idx) => {
          return (
            <div className="note" key={note._id}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <div className="buttons">
                <button
                  onClick={() => {
                    handleDeleteNote(note._id);
                  }}
                >
                  delete
                </button>
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
