import React from "react";
import "./index.css";
import { useState } from "react";
import axios from 'axios'

const App = () => {
  const [notes, setnotes] = useState([]);


  axios.get('http://localhost:3000/api/notes')
  .then((res)=>{
    setnotes(res.data.note)
  })
  
  return (
    <div className="main">
      <div className="notes">
        {notes.map((note, idx) => {
          return (
            <div className="note" id={idx}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
