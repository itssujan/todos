import { connect } from "react-redux";
import Todos from "../components/todos";

const getTodos = todos => {
  return [
    ...todos,
    {
      id: 1,
      title: "first task"
    },
    {
      id: 2,
      title: "my second task"
    }
  ];
};

const mapStateToProps = state => ({
  todos: getTodos(state.todos)
});

const mapDispatchToProps = {
  // onTodoClick: toggleTodo
};

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Todos);

export default TodosContainer;
