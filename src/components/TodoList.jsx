import React from "react";
import ToDoItem from "./ToDoItem";

const TodoList = ({ title, toDoLists, setToDoLists }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {toDoLists.map((todo) => (
          <li
            key={todo.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <ToDoItem todo={todo} setToDoLists={setToDoLists} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
