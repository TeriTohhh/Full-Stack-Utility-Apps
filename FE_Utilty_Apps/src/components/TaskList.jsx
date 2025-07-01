import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onEdit, onToggle }) {
  return (
    <ul>
      {tasks.map((task , id) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}


export default TaskList;