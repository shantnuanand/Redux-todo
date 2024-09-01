import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-lg mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Todos</h2>
      <ul className="list-none p-0">
        {todos.length === 0 ? (
          <li className="text-gray-500">No todos available</li>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between mb-2 p-3 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 transition-colors"
            >
              <span className="text-gray-700">{todo.text}</span>
              <button
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                X
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Todos;
