// server create karna
// server ko config karna

let express = require("express");

let app = express();

app.use(express.json());

let notes = [];

app.post("/notes", (req, res) => {
  notes.push(req.body);
  console.log(notes);

  res.status(201).json({
    message: "notes create successfully",
  });
});

// GET API

app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "notes fetch successfully",
    notes: notes,
  });
});

// DELETE API
app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];

  res.status(200).json({
    message: "notes delete successfully ",
  });
});

// PATCH API
app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].discription = req.body.discription;

  res.send(200).json({
    message: "notes update successfully",
  });
});

module.exports = app;
