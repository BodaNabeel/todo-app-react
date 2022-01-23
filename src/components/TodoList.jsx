import React, { useState } from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todos, setTodos }) {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoListItem key={todo.id} todos={todos} todo={todo} setTodos={setTodos}/>;
      })}
    </ul>
  );
}

export default TodoList;
