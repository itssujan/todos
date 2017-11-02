import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todos";

let AddTodo = ({ dispatch }) => {
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!this.textInput.value.trim()) {
            return;
          }
          dispatch(addTodo(this.textInput.value));
          this.textInput.value = "";
        }}
      >
        <input
          type="text"
          ref={input => {
            this.textInput = input;
          }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

AddTodo = connect()(AddTodo);
export default AddTodo;
