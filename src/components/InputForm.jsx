import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function InputForm({ todos, setTodos }) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleClickDown = (event) => {
    if (event.key === "Enter") {
      getTask();
    }
  };
  const resetValue = () => {
    setInputValue("");
  };
  const getTask = () => {
    if (inputValue !== "") {
      setTodos((prvState) => {
        return [
          ...prvState,
          { id: uuidv4(), task: inputValue, isCompleted: false },
        ];
      });
      resetValue();
    } else {
      alert("task can't be empty");
    }
  };

  return (
    <div className="input-form">
      <input
        type="text"
        id="task-name"
        className="input-field"
        onChange={handleChange}
        onKeyDown={handleClickDown}
        placeholder="name of task.."
        value={inputValue}
        maxLength={50}
      />
      <button className="btn-add" type="submit" onClick={getTask}>
        add
      </button>
    </div>
  );
}

export default InputForm;
