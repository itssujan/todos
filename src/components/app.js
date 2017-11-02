import React from "react";
import Todos from "../containers/todos";
import AddTodo from "../containers/addTodo";

const App = () => (
  <div>
    <AddTodo />
    <Todos />
  </div>
);

export default App;
