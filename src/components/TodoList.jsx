import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

function TodoList({ todos, setTodos }) {
  const deleteTask = (id) => {
    const updatedTodos = todos.filter((item) => {
      return id !== item.id;
    });

    // console.log(updatedTodos)
    setTodos(updatedTodos);
  };
  const changeTaskState = (id) => {
    const updatedTodos = todos.map((item) => {
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
            <MdDelete key={item.id} onClick={(event) => deleteTask(item.id)} />
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
