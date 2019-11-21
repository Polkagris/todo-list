import React, { useState, useEffect } from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
  const [newTodo, setNewTodo] = useState({ title: "", completed: false });
  const [todoList, setTodoList] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [inputValueState, setInputValueState] = useState("");

  let todoListArray = todoList;
  let valueInput = "";

  const onChangeTodoInputHandler = e => {
    setNewTodo({ title: e.target.value, completed: false });
  };

  const addNewTodoHandler = () => {
    todoListArray.push(newTodo);
    setTodoList(todoListArray);
    setIsUpdated(!isUpdated);
  };

  const completedCallback = (completed, index) => {
    todoListArray[index].completed = completed;
    setTodoList(todoListArray);
  };

  const deletedCallback = index => {
    todoListArray.splice(index, 1);
    setTodoList(todoListArray);
    setIsUpdated(!isUpdated);
  };

  useEffect(() => {
    setTodoList(todoListArray);
  }, [isUpdated]);

  return (
    <div>
      <div style={css.todoListContainer}>
        <div style={css.addTodoContainer}>
          <div style={css.title}>Add new todo</div>
          {todoListArray}
          <div style={css.inputButtonContainer}>
            <input
              style={css.input}
              type="text"
              onChange={onChangeTodoInputHandler}
            />
            <button style={css.button} onClick={addNewTodoHandler}>
              Add
            </button>
          </div>
        </div>
        {todoList.map((todo, index) => (
          <TodoListItem
            todo={todo}
            key={todo}
            completed={completedCallback}
            deleted={deletedCallback}
            todoIndex={index}
          />
        ))}
      </div>
    </div>
  );
}
const css = {
  todoListContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 auto",
    maxWidth: "700px"
  },
  addTodoContainer: {
    margin: "0 auto"
  },
  title: {
    fontSize: "25px"
  },
  inputButtonContainer: {
    display: "flex"
  },
  input: {
    padding: "16px 20px",
    fontSize: "20px"
  },
  button: {
    padding: "22px",
    border: "none",
    backgroundColor: "green",
    color: "white"
  }
};