const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoModel = require("./models/todoModel");

const app = express();

app.use(cors());

app.use(express.json());

const uri =
  "mongodb+srv://hmchuong:SsANGNrrzjiKQLx4@atlascluster.ui4yxb6.mongodb.net/todolist?retryWrites=true&w=majority&appName=AtlasCluster";

mongoose
  .connect(uri, {
    serverSelectionTimeoutMS: 5000,
  })
  .catch((err) => console.log(err.reason));

app.get("/get", (req, res) => {
  todoModel
    .find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  todoModel
    .create({
      task: task,
    })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;

  todoModel
    .findByIdAndUpdate({ _id: id }, { done: true })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  todoModel
    .findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running...");
});
