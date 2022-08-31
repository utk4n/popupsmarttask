import { deleteTodo, createTodo, getTodos } from "../redux/todoSlice";
import { useDispatch } from "react-redux/";
import { API_URL } from "../api/API_KEY";
import axios from "axios";

const useAPI = () => {
  const dispatch = useDispatch();

  const postHandle = async (form) => {
    await dispatch(createTodo(form));
    dispatch(getTodos());
  };

  const deleteHandle = async (id) => {
    await dispatch(deleteTodo(id));
    dispatch(getTodos());
  };

  const putHandle = async (todoID, form) => {
    await axios.put(API_URL + `/${todoID}`, form);
    dispatch(getTodos());
  };

  return {
    deleteHandle,
    postHandle,
    putHandle,
  };
};

export default useAPI;
