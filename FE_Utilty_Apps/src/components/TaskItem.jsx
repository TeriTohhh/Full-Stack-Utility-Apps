import React, { useState } from "react";
import "./../styles/taskItem.css"; // import the CSS file

function TaskItem({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    if (editedText.trim() !== "") {
      onEdit(task.id, editedText, editedDescription);
      setIsEditing(false);
    }
  };

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.is_completed}
        onChange={() => onToggle(task.id)}
        className="checkbox"
      />

      <div className="task-content">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              placeholder="Task title"
              className="task-title-input"
            />
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              placeholder="Description"
              rows={2}
              className="task-description-input"
            />
          </>
        ) : (
          <>
            <h4 className={`task-title ${task.is_completed ? "completed" : ""}`}>
              {task.title}
            </h4>
            <p className="task-description">{task.description}</p>
          </>
        )}
      </div>

      <div className="task-buttons">
        {isEditing ? (
          <button onClick={handleSave} className="icon-button">💾</button>
        ) : (
          <button onClick={handleEdit} className="icon-button">✏️</button>
        )}
        <button onClick={() => onDelete(task.id)} className="icon-button">✂️</button>
      </div>
    </li>
  );
}

export default TaskItem;