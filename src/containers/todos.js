import { connect } from "react-redux";
import Todos from "../components/todos";

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = {
  onTodoClick: toggleTodo
};

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Todos);

export default TodosContainer;
