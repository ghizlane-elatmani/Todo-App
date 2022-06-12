import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const Todo = ({ todo, active, completedHandler, deleteHandler }) => {
  return (
    <div className="todo-container">
      <div className="checkbox-container">
        <input
          id="cb1"
          className="input-check"
          type="checkbox"
          onChange={(e) => {
            completedHandler(todo);
          }}
          checked={todo.completed}
        />
        <label htmlFor="cb1" className={`${todo.completed ? "slash" : ""}`}>
          {todo.text}
        </label>
      </div>
      {active === "completed" ? (
        <MdDeleteOutline
          onClick={() => {
            deleteHandler(todo);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Todo;
