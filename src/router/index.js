import Todos from "../pages/Todos/Todos";
import Auth from "../pages/Auth/Auth";
import { Routes, Route } from "react-router-dom";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  );
};

export default Router;
