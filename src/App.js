import { useState } from "react";
import InputForm from "./components/InputForm";
import TodoItem from "./components/TodoItem";

const intialTodos = [
  {
    id: 0,
    task: "task 1",
    completed: false,
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

      <TodoItem todos={todos}/>
    </>
  );
}

export default App;
