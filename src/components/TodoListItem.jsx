import React, { useState, useRef, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";

function TodoListItem({ todos, setTodos, todo }) {
  const taskInput = useRef();
  const [taskName, settaskName] = useState(todo.task);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      if (taskInput.current && !taskInput.current.contains(event.target)) {
        setIsEditing(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const editTaskName = (id, value) => {
    settaskName(value);
    const updatedTodos = todos.map((item) => {
      if (id === item.id) {
        return { ...item, task: value };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  const enableEdit = () => {
    setIsEditing(!isEditing);
  };

  const deleteTask = (id) => {
    const updatedTodos = todos.filter((item) => {
      return id !== item.id;
    });
    setTodos(updatedTodos);
  };

  const changeTaskState = (id) => {
    const updatedTodos = todos.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  return (
    <li
      key={todo.id}
      style={
        todo.isCompleted
          ? { textDecoration: "line-through" }
          : { textDecoration: "none" }
      }
    >
      {isEditing ? (
        <input
          autoFocus
          ref={taskInput}
          className="task-input"
          onChange={(event) => {
            editTaskName(todo.id, event.target.value);
          }}
          value={taskName}
        />
      ) : (
        <p className="task-name">{taskName}</p>
      )}
      <div className="buttons">
        <input
          type="checkbox"
          defaultChecked={todo.isCompleted}
          onClick={(event) => changeTaskState(todo.id)}
        />
        <MdDelete key={todo.id} onClick={(event) => deleteTask(todo.id)} />
        <BiEditAlt onClick={enableEdit} />
      </div>
    </li>
  );
}

export default TodoListItem;
