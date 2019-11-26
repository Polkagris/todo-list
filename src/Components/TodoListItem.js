import React, { useState } from "react";

export default function TodoListItem(props) {
  const [isCompleted, setIsCompleted] = useState(false);

  const completeTodoHandler = () => {
    setIsCompleted(!isCompleted);
    props.completed(!isCompleted, props.todoIndex);
  };

  const deleteTodoHandler = () => {
    setIsCompleted(false);
    props.deleted(props.todoIndex);
  };

  return (
    <div
      style={
        isCompleted == true ? css.todoContainerCompleted : css.todoContainer
      }
    >
      <div style={isCompleted == true ? css.completed : css.notCompleted}>
        {props.todo.title}
      </div>
      <div style={css.buttonContainer}>
        <button onClick={completeTodoHandler}>Completed</button>
        <button onClick={deleteTodoHandler}>Delete</button>
      </div>
    </div>
  );
}

const css = {
  todoContainer: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#2482F0",
    padding: "20px",
    border: "1px solid white",
    color: "white",
    fontSize: "20px",
    fontWeight: 500
    //width: "100%",
    //margin: "0 auto"
  },
  todoContainerCompleted: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    border: "1px solid white",
    color: "white",
    fontSize: "20px",
    fontWeight: 500,
    backgroundColor: "#bdd1ff"
  },
  buttonContainer: {
    display: "flex"
  },
  completed: {
    textDecoration: "line-through"
    //backgroundColor: "#bdd1ff"
  },
  notCompleted: {
    textDecoration: "none"
  }
};
