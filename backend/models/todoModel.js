const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    task: {
      type: String,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const todoModel = mongoose.model("todo", TodoSchema);
module.exports = todoModel;
