// import axios from "axios";
import React from "react";
import { useState } from "react";
import { Input, Button, InputGroup, InputGroupText } from "reactstrap";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

function Add({ todos, setTodos, addTodo, updateData }) {
  //Temprory State

  const [newTask, setNewTask] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (newTask && newTask.length > 2) {
      let newTodo = { content: newTask };

      setNewTask("");
      addTodo(newTodo.content);
      console.log(newTodo.content.length);
    } else {
      alert(" Please enter at least 3 characters");
    }
  };
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      {" "}
      <div className="container-sm">
        <InputGroup>
          <InputGroupText className="col-11">
            <Input
              minLength={3}
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            ></Input>
          </InputGroupText>
          <Button onClick={onSubmit} className="col-1">
            Add
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default Add;
