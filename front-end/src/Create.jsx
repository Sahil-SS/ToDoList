import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const Create = () => {
  const [task, setTask] = useState("");
  const handleChange = () => {
    axios
      .post("http://localhost:3001/add", { taskList: task })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <input
        className="form-input"
        type="text"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" className="form-button" onClick={handleChange}>
        Add
      </button>
    </div>
  );
};

export default Create;
