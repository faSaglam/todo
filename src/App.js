import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
// import { Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import Footer from "./components/Footer";
import List from "./components/List";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://6324434dbb2321cba9285663.mockapi.io/todos/")
      .then((res) => {
        setTodos(res.data);
      });
  }, []);
  const addTodo = (content) => {
    console.log(content);
    axios
      .post("https://6324434dbb2321cba9285663.mockapi.io/todos/", {
        content,
        isCompleted: false,
      })
      .then((res) => {
        setTodos({ todos: [...todos, res.data] });
      });
  };
  const deleteTodo = (id) => {
    axios
      .delete(`https://6324434dbb2321cba9285663.mockapi.io/todos/${id}`)
      .then((res) => {
        setTodos(todos.filter((todo) => id !== todo.id));
      });
  };

  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );
  };

  const updateTodo = (updateData) => {
    // let filterRecords = [...todos].filter((todo) => todo.id !== updateData.id);
    // let updatedObject = [...filterRecords, updateData];
    // setTodos(updatedObject)
    let filterRecords = [...todos].filter((todo) => todo.id === updateData.id);
    if (filterRecords) {
      axios.put(
        `https://6324434dbb2321cba9285663.mockapi.io/todos/${updateData.id}`,
        {
          content: updateData.content,
          isCompleted: updateData.isCompleted,
        }
      );
    }
  };

  return (
    <div className="App">
      <ThemeProvider>
        <Header />{" "}
        <Add
          todos={todos}
          setTodos={setTodos}
          addTodo={addTodo}
          updateTodo={updateTodo}
        ></Add>
        <List
          todos={todos}
          deleteTodo={deleteTodo}
          markComplete={markComplete}
          updateTodo={updateTodo}
        ></List>
        <Footer></Footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
