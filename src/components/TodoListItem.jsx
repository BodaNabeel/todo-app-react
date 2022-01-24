import React, { useState, useRef, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";

function TodoListItem({ todos, setTodos, todo }) {
  const taskInput = useRef();
  const [taskName, settaskName] = useState(todo.task);

  useEffect(() => {
    const handler = (event) => {
      if (
        !taskInput.current.contains(event.target) &&
        !taskInput.current.disabled
      ) {
        taskInput.current.disabled = true;
        taskInput.current.blur();
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

  const editTaskName = (id, value) => {
    settaskName(value);
    const updatedTodos = todos.map((item) => {
      if (id === item.id) {
        return { ...item, task: value };
      }
      return item;
    });
  };
  const enableEdit = () => {
    taskInput.current.disabled = false;
    taskInput.current.focus();
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
      <input
        ref={taskInput}
        className="task-input"
        disabled
        onChange={(event) => {
          editTaskName(todo.id, event.target.value);
        }}
        value={taskName}
      />

      <div className="buttons">
        <input type="checkbox" onClick={(event) => changeTaskState(todo.id)} />
        <MdDelete key={todo.id} onClick={(event) => deleteTask(todo.id)} />
        <BiEditAlt onClick={enableEdit} />
      </div>
    </li>
  );
}

export default TodoListItem;
