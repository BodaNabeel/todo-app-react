import { useState } from "react";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

const intialTodos = [
  {
    id: 0,
    task: "task 1",
    isCompleted: false,
  },
  {
    id: 1,
    task: "task 2",
    isCompleted: false,
  },
];
function App() {
  const [todos, setTodos] = useState(intialTodos);

  return (
    <>
      <header>
        <h1>To-Do App</h1>
      </header>

      <InputForm todos={todos} setTodos={setTodos} />

      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
