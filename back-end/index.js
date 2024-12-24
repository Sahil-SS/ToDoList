const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./Models/Todo");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("Connected to database"));

//Posting the tasks
app.post("/add", (req, res) => {
  const newTask = req.body.taskList;
  TodoModel.create({
    taskList: newTask,
  })
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
