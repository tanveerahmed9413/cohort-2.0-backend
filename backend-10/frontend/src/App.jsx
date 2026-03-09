import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [notes, setnotes] = useState([]);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  // notes fetch
  function fetchNotes() {
    axios
      .get("https://cohort-2-0-backend-10-gi8l.onrender.com/api/notes")
      .then((res) => {
        console.log(res.data);
        setnotes(res.data.note);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  function submitHandler(e) {
    e.preventDefault();

    axios
      .post("https://cohort-2-0-backend-10-gi8l.onrender.com/api/notes", {
        title,
        description,
      })
      .then((res) => {
        fetchNotes();
        settitle("");
        setdescription("");
      });
  }



 function deleteHandler(noteId){

  axios.delete('https://cohort-2-0-backend-10-gi8l.onrender.com/api/notes/'+noteId)
  .then((res)=>{
    fetchNotes()
  })

 }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={title}
          placeholder="enter a title"
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          value={description}
          placeholder="enter a description"
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <button>submit</button>
      </form>


      <div className="notes">
        {notes.map((note, idx) => {
          return (
            <div className="note" key={idx}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={()=>{deleteHandler(note._id)}}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
