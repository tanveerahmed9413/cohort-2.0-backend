
let express = require("express");

let app = express();

let port = 3000;

app.use(express.json());

let notes = [];

app.post("/notes", (req, res) => {
  console.log(req.body);

 notes.push(req.body)

  res.send("notes created");
});

app.get("/notes", (req, res) => {
  res.send(notes)
});




app.listen(port, () => {
  console.log("server is running http://localhost:3000");
});
