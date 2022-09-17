import React from "react";
import ListItem from "../ListItem";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

function List({ todos, deleteTodo, markComplete, updateTodo }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      {" "}
      <ListItem
        todos={todos}
        deleteTodo={deleteTodo}
        markComplete={markComplete}
        updateTodo={updateTodo}
      ></ListItem>
    </div>
  );
}

export default List;
