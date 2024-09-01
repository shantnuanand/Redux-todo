import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodos = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      dispatch(addTodo(newTask));
      setNewTask("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Todo List</h1>
      <form onSubmit={addTodoHandler} className="flex flex-col">
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            className="flex-grow p-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodos;
