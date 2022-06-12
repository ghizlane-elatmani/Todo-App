import React from "react";
import { useState } from "react";

const Form = ({ submitTodoHandler }) => {
  const [todo, setTodo] = useState("");

  return (
    <form className="form">
      <label htmlFor="addInput">add details</label>
      <input
        className="addInput"
        id="addInput"
        type="text"
        placeholder="add details"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="btn-add"
        type="submit"
        onClick={(e) => {
          submitTodoHandler(e, todo, setTodo);
        }}
      >
        Add
      </button>
    </form>
  );
};

export default Form;
