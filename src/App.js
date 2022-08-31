import Router from "./router";
import { useSelector } from "react-redux";

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div
      className={`w-sreen mx-auto h-full transition-all duration-400 ${
        theme === "light" ? "bg-slate-200" : "bg-[#333] min-h-screen text-black"
      }`}
    >
      <Router />
    </div>
  );
};

export default App;
