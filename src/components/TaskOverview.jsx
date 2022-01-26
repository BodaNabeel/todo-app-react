import React from "react";

function TaskOverview({ todos }) {
  const notDoneTodosMap = todos.filter((item) => !item.isCompleted);
  return (
    <>
      Tasks: {todos.length} <br />
      Unfinished: {notDoneTodosMap.length}
    </>
  );
}

export default TaskOverview;
