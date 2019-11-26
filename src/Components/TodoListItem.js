import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

  console.log(
    "todoIndex:",
    props.todoIndex,
    "with type:",
    typeof toString(props.todoIndex)
  );

  //const indexToString = toString(props.todoIndex);

  return (
    <Draggable
      draggableId={props.todo.title}
      index={props.todoIndex}
      key={props.todo.title}
    >
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div
            style={
              isCompleted == true
                ? css.todoContainerCompleted
                : css.todoContainer
            }
          >
            <div style={isCompleted == true ? css.completed : css.notCompleted}>
              {props.todo.title}
            </div>
            <div>
              Index:
              {props.todoIndex}
            </div>
            <div style={css.buttonContainer}>
              <button onClick={completeTodoHandler}>Completed</button>
              <button onClick={deleteTodoHandler}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
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
  },
  notCompleted: {
    textDecoration: "none"
  }
};
