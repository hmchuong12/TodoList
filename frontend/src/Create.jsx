import { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then(() => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create_form">
      <input
        type="text"
        placeholder="Enter task here!"
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="button" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};

export default Create;
