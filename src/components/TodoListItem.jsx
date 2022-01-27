import React, { useState, useRef, useEffect } from "react";

function TodoListItem({ todos, setTodos, todo }) {
  const taskInput = useRef();
  const [taskName, settaskName] = useState(todo.task);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      if (
        taskInput.current &&
        !taskInput.current.contains(event.target) &&
        taskInput.current.value.length > 1
      ) {
        setIsEditing(false);
      } else if (
        taskInput.current &&
        !taskInput.current.contains(event.target) &&
        taskInput.current.value.length === 0
      ) {
        alert("task name can't be empty");
        taskInput.current.focus()
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
    <li key={todo.id}>
      {isEditing ? (
        <textarea
          autoFocus
          ref={taskInput}
          rows="1"
          fixed
          className="task-input"
          maxLength="50"
          minLength="1"
          onChange={(event) => {
            editTaskName(todo.id, event.target.value);
          }}
          value={taskName}
        />
      ) : (
        <p
          style={
            todo.isCompleted
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
          className="task-name"
        >
          {taskName}
        </p>
      )}
      <div className="buttons">
        <div className="done-btn">
          <input
            type="checkbox"
            className="checkbox-old"
            defaultChecked={todo.isCompleted}
            onClick={(event) => changeTaskState(todo.id)}
          />
          <span className="checkbox-new">✅</span>
        </div>
        <span key={todo.id} onClick={(event) => deleteTask(todo.id)}>
          ❌
        </span>
        <span onClick={enableEdit}>📝</span>
      </div>
    </li>
  );
}

export default TodoListItem;
