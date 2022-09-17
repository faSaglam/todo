import React, { useState } from "react";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";

function ListItem({ todos, deleteTodo, markComplete, updateTodo }) {
  const [updateData, setUpdateData] = useState("");
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      content: e.target.value,
      isCompleted: updateData.isCompleted ? true : false,
    };
    setUpdateData(newEntry);
  };
  const cancelUpdate = () => {
    setUpdateData("");
  };
  return (
    <div className="container-sm">
      {todos.map((todo) => (
        <div key={todo.id}>
          <InputGroup>
            <InputGroupText className="col-1">
              {" "}
              <Input
                type={"checkbox"}
                bsSize="md"
                valid
                onClick={() => markComplete(todo.id)}
              />
            </InputGroupText>
            <InputGroupText
              className={todo.isCompleted ? "done col-9" : "col-9"}
            >
              {todo.content}
            </InputGroupText>{" "}
            <Button
              className="col-1"
              color="danger"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </Button>{" "}
            <Button
              className="col-1"
              color="warning"
              onClick={() =>
                setUpdateData({
                  id: todo.id,
                  content: todo.content,
                  isCompleted: todo.isCompleted ? true : false,
                })
              }
            >
              Update
            </Button>
          </InputGroup>

          {/* add'in oraya taşıyabilirsin*/}
        </div>
      ))}
      {updateData && updateData ? (
        <>
          <InputGroup>
            <InputGroupText className="col-10">
              <Input
                value={updateData && updateData.content}
                onChange={(e) => changeTask(e)}
              ></Input>
            </InputGroupText>
            <Button className="col-1" onClick={updateTodo(updateData)}>
              Update
            </Button>
            <Button className="col-1" onClick={cancelUpdate}>
              Cancel
            </Button>
          </InputGroup>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ListItem;
