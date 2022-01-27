import React from "react";

function TaskOverview({ todos }) {
  const notDoneTodosMap = todos.filter((item) => !item.isCompleted);
  return (
    <div className="task-overview">
      <p className="total-task">Tasks: {todos.length}</p>
      <p className="left-task">Unfinished: {notDoneTodosMap.length}</p>
    </div>
  );
}

export default TaskOverview;
