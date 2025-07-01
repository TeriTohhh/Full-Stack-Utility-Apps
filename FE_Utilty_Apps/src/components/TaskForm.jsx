import React, { useState } from "react";

function AddTaskForm({onAdd}) {
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ taskText: input, description });
    setInput("");
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <textarea
        placeholder="Enter task description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTaskForm;
