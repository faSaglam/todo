import React from "react";
import Add from "../Add";

import List from "../List";
function Main({
  todos,
  setTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  markComplete,
}) {
  return (
    <div>
      <Add
        setTodos={setTodos}
        addTodo={addTodo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        markComplete={markComplete}
      ></Add>
      <List
        setTodos={setTodos}
        addTodo={addTodo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        markComplete={markComplete}
      ></List>
    </div>
  );
}

export default Main;
