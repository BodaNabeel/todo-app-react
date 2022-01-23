import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function InputForm({ todos, setTodos }) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const getTask = () => {
    if (inputValue !== "") {
      setTodos((prvState) => {
        return [
          ...prvState,
          { id: uuidv4(), task: inputValue, isCompleted: false },
        ];
      });
    } else {
      alert("task can't be empty")
    }
  };

  return (
    <div className="input-form">
      <input
        type="text"
        id="task-name"
        onChange={handleChange}
        placeholder="name of task.."
      />
      <button type="submit" onClick={getTask}>
        +
      </button>
    </div>
  );
}

export default InputForm;
