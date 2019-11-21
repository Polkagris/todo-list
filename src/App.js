import React from "react";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div>
      <h1 style={css.title}>To Do List</h1>
      <TodoList />
    </div>
  );
}

const css = {
  title: {
    textAlign: "center"
  }
};

export default App;
