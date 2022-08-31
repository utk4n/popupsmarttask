import { useSelector } from "react-redux";

const Todo = ({ todo, deleteTodo, editTodo, completeTodoHandle }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <div
      className={`my-2 border-2 p-2 shadow-md rounded-md flex items-center justify-between bg-slate-50 ${
        theme === "light" ? "" : "bg-slate-500 text-white"
      }`}
      key={todo.id}
    >
      <div
        className={`${todo.isCompleted ? "text-gray-400 line-through" : ""}`}
      >
        {todo.content}
      </div>
      <div>
        <button
          className={` w-[75px] rounded-md bg-gray-500 ${
            theme === "light" ? "" : "bg-slate-800  "
          } text-white py-2 px-5`}
          onClick={() => editTodo(todo.id, todo)}
        >
          Edit
        </button>
        <button
          className=" w-[75px] rounded-md bg-red-500 text-white py-2 ml-2"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
        <button
          className=" w-[75px] rounded-md bg-blue-500 text-white py-2 ml-2"
          onClick={() => completeTodoHandle(todo)}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default Todo;
