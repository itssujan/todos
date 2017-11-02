import React from "react";
import TodoItem from "./todoItem";

const todos = ({ todos, onTodoClick }) => (
  <ul>{todos.map(todo => <TodoItem key={todo.id} {...todo} />)}</ul>
);

export default todos;
