import React, { useState } from "react";

function TodoList({ todos, setTodos }) {
  const changeTaskState = (id) => {
    const updatedTodos = todos.map((item, index) => {
      console.log(item);
      if (id === item.id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setTodos(updatedTodos);
  };
  return (
    <ul>
      {todos.map((item) => {
        return (
          <li
            key={item.id}
            style={
              item.isCompleted
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {item.task}
            <input
              type="checkbox"
              onClick={(event) => changeTaskState(item.id)}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
