import React from "react";
import AddTodos from "./components/AddTodos";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div>
      <AddTodos />
      <Todos />
    </div>
  );
};

export default App;