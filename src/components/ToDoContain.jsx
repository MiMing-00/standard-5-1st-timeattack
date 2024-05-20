import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const ToDoContain = () => {
  const [toDoLists, setToDoLists] = useState([
    {
      id: 1,
      title: "리액트 조아~",
      content: "리액트 더 열심히 하기~",
      isDone: false,
    },
    {
      id: 2,
      title: "JS 조아~",
      content: "JS 더 열심히 하기~",
      isDone: true,
    },
  ]);
  return (
    <>
      <h2>To Do List</h2>
      <TodoForm setToDoLists={setToDoLists} />
      <TodoList
        title="Working 🔥🔥"
        toDoLists={toDoLists.filter((item) => !item.isDone)}
        setToDoLists={setToDoLists}
      />
      <TodoList
        title="Done 🎂🎉"
        toDoLists={toDoLists.filter((item) => item.isDone)}
        setToDoLists={setToDoLists}
      />
    </>
  );
};

export default ToDoContain;
