import React, { useState, useRef, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";

function TodoListItem({ todos, setTodos, todo }) {
  // const taskInput = useRef();
  const taskNameToggle = useRef();
  const [taskName, settaskName] = useState(todo.task);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      // if (taskInput.current && !taskInput.current.contains(event.target)) {
      //   setIsEditing(false);
      //   taskNameToggle.current.contentEditable = false;
      //   console.log(taskNameToggle);
      // }
      if (
        taskNameToggle.current.contentEditable &&
        !taskNameToggle.current.contains(event.target)
        && taskNameToggle.current.innerHTML.length <= 50 && taskNameToggle.current.innerHTML.length > 0
      ) {
        taskNameToggle.current.contentEditable = false;
        setIsEditing(false);
       console.log(taskNameToggle.current.innerHTML.length ) 
      } else if ( taskNameToggle.current.innerHTML.length > 50 && !taskNameToggle.current.contains(event.target)) {
        alert("task name can't be more than 50 characters")
        taskNameToggle.current.focus()
      }
      else if ( taskNameToggle.current.innerHTML.length === 0 && !taskNameToggle.current.contains(event.target)) {
        alert("task name can't be empty")
        taskNameToggle.current.focus()
      }
    };
    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const editTaskName = (id, value) => {
    settaskName(value);
    const updatedTodos = todos.map((item) => {
      if (id === item.id) {
        console.log("working");
        // return { ...item, task: value };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  const enableEdit = () => {
    taskNameToggle.current.contentEditable = true;
    taskNameToggle.current.focus();
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
      {/* {isEditing ? (
        <input
          autoFocus
          ref={taskInput}
          maxLength={50}
          className="task-input"
          onChange={(event) => {
            editTaskName(todo.id, event.target.value);
          }}
          value={taskName}
        />
      ) : (
        <p 
        style={taskNameToggle.contentEditable?{border: "2px solid blue"}:{border: "none"}}
        ref={taskNameToggle} className="task-name">
          {taskName}
        </p>
      )} */}
      <p
        style={
          isEditing
            ? { border: "2px solid blue", outline: "none" }
            : { border: "none" }
        }
        ref={taskNameToggle}
        id={todo.id}
        className="task-name"
        
      >
        {taskName}
      </p>
      <div className="buttons">
        <input
          type="checkbox"
          defaultChecked={todo.isCompleted}
          onClick={(event) => changeTaskState(todo.id)}
        />
        <MdDelete key={todo.id} onClick={(event) => deleteTask(todo.id)} />
        <BiEditAlt id={todo.id} onClick={enableEdit} />
      </div>
    </li>
  );
}

export default TodoListItem;
