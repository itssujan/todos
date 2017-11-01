import React from "react";

const todos = ({ todos, onTodoClick }) => (
  <ul>{todos.map(todo => <Todo id={todo.id} />)}</ul>
);
