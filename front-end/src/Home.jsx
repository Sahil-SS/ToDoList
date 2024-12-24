import React, { useEffect, useState } from "react";
import Create from "./Create";
import "./App.css";
import axios from "axios";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import { IoTrash } from "react-icons/io5";

const Home = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodo(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3001/update" + id)
      .then((result) => location.reload())
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div className="home">
      <h1>To-Do List:-</h1>
      <Create />
      {todo.length === 0 ? (
        <h3>No Record Found</h3>
      ) : (
        todo.map((item) => (
          <div key={item._id} className="task">
            <div className="check-box">
              {todo.done ? (
                <FaCircleCheck className="icon" />
              ) : (
                <RiCheckboxBlankCircleLine
                  className="icon"
                  onClick={() => handleEdit(item._id)}
                />
              )}
              {item.taskList}
            </div>
            <div>
              <span>
                <IoTrash
                  className="icon"
                  onClick={() => handleDelete(item._id)}
                />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
