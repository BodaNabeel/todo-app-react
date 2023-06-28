// import { useState } from "react";
import Footer from "./components/Footer";
import InputForm from "./components/InputForm";
import TaskOverview from "./components/TaskOverview";
import TodoList from "./components/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";

const intialTodos = [
 
];
function App() {
  const [todos, setTodos] = useLocalStorage("task", intialTodos);

  return (
    <>
      <header>
        <h1>To-Do App</h1>
      </header>

      <InputForm todos={todos} setTodos={setTodos} />

      <TaskOverview todos={todos} />

      <TodoList todos={todos} setTodos={setTodos} />

      <Footer />
    </>
  );
}

export default App;
