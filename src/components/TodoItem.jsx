import React from "react";

const ToDoItem = ({ todo, setToDoLists }) => {
  const { title, content, isDone, id } = todo;

  const deleteToDo = (id) => {
    setToDoLists((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleToDo = (id) => {
    setToDoLists((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  return (
    <>
      <div style={{ fontWeight: "900" }}>{title}</div>
      <div>{content}</div>
      <div>
        <button onClick={() => toggleToDo(id)}>
          {isDone ? "취소 ↩️" : "완료✔️"}
        </button>
        <button onClick={() => deleteToDo(id)}>삭제☠️</button>
      </div>
    </>
  );
};

export default ToDoItem;
