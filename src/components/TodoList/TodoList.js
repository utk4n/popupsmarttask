import Todo from "../Todo/Todo";
const TodoList = ({
  todos,
  handleForm,
  deleteTodo,
  editTodo,
  completeTodoHandle,
}) => {
  return (
    <ul className="w-1/2">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleForm={handleForm}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          completeTodoHandle={completeTodoHandle}
        />
      ))}
    </ul>
  );
};

export default TodoList;
