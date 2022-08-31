import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTodos } from "../../redux/todoSlice";
import useAPI from "../../hooks/useAPI";
import DeleteModal from "../../components/Modal/DeleteModal";
import EditModal from "../../components/Modal/EditModal";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import TodoAdd from "../../components/TodoAdd/TodoAdd";
import UserInfo from "../../components/UserInfo/UserInfo";
import TodoList from "../../components/TodoList/TodoList";

const Todos = () => {
  const theme = useSelector((state) => state.theme);
  const [form, setForm] = useState({ content: "", isCompleted: false });
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [todoID, setTodoID] = useState(1);
  const navigate = useNavigate();
  const [display, setDisplay] = useState(false);
  const [editDisplay, setEditDisplay] = useState(false);
  const { postHandle, putHandle } = useAPI();

  const deleteTodo = (id) => {
    setDisplay(true);
    setTodoID(id);
  };

  const editTodo = (id, form) => {
    setEditDisplay(true);
    setTodoID(id);
    setForm(form);
  };

  const completeTodoHandle = async (todo) => {
    const validation = !todo.isCompleted;
    await putHandle(todo.id, { ...todo, isCompleted: validation });
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user === null) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <div className="flex items-center flex-col p-5">
      <div className="w-full flex items-center justify-evenly mb-5 ">
        <UserInfo />
        <ThemeSwitcher />
      </div>
      <div className="flex items-center justify-center relative w-1/2">
        <DeleteModal
          display={display}
          setDisplay={setDisplay}
          todoID={todoID}
        />
        <EditModal
          setForm={setForm}
          todoID={todoID}
          form={form}
          display={editDisplay}
          setDisplay={setEditDisplay}
        />
        <TodoAdd
          theme={theme}
          setForm={setForm}
          postHandle={postHandle}
          form={form}
        />
      </div>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        completeTodoHandle={completeTodoHandle}
      />
    </div>
  );
};

export default Todos;
