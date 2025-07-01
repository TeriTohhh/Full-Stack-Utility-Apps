import React, { useEffect, useState } from "react";
import AddTaskForm from "./TaskForm";
import TaskList from "../components/TaskList";
import "../styles/taskManager.css";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const userId = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  // console.log("task manager is rendering");

  // Reusable fetch function
  const fetchTasks = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/tasks/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const json = await res.json();
      if (json?.data) {
        setTasks(json.data);
      } else {
        setTasks([]);
        console.error("Unexpected response format:", json);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([]);
    }
  };

  // Fetch tasks on mount
  useEffect(() => {
    fetchTasks();
  }, [userId, token]);

  // Add task and re-fetch list
  const addTask = async ({ taskText, description }) => {
    if (taskText.trim() === "") return;

    const payload = {
      user_id: Number(userId),
      title: taskText,
      description,
    };

    try {
      const res = await fetch("http://localhost:5000/api/tasks/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        await fetchTasks(); // ✅ refresh task list
      } else {
        console.error("Failed to add task");
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Toggle completion
  const toggleComplete = async (id) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    await editTask(id, task.title, task.description, !task.is_completed);
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/tasks/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        await fetchTasks();
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // ✏️ Edit task
  const editTask = async (
    id,
    newTitle,
    newDescription,
    isCompleted = false
  ) => {
    try {
      const payload = {
        title: newTitle,
        description: newDescription,
        is_completed: isCompleted,
      };

      const res = await fetch(`http://localhost:5000/api/tasks/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        await fetchTasks(); // Refresh task list after update
      } else {
        console.error("Failed to edit task");
      }
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  return (
    <div className="app-container">
      <h2>Welcome to Task Manager</h2>
      <AddTaskForm onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={editTask}
        onToggle={toggleComplete}
      />
    </div>
  );
}

export default TaskManager;
