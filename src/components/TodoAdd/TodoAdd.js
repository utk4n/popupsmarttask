import { ToastContainer } from "react-toastify";
import useToastify from "../../hooks/useToastify";

const TodoAdd = ({ theme, setForm, postHandle, form }) => {
  const { notifySuccess, notifyError } = useToastify();

  const formHandle = () => {
    if (form.content.length >= 3 && form.content !== "") {
      postHandle(form);
      setForm({ ...form, content: "" });
      notifySuccess();
    } else {
      notifyError();
    }
  };

  return (
    <div className="flex w-full border-2 p-2 rounded-md shadow-sm bg-slate-50">
      <ToastContainer />
      <input
        value={form.content}
        placeholder="What will you do?"
        className={`w-full bg-transparent bg-slate-50 placeholder:font-light rounded-l-md rounded-r-md px-2 text-primary outline-none font-normal text-center text-2xl ${
          theme === "light"
            ? ""
            : "bg-slate-500 text-white placeholder:text-black-100 placeholder:font-light"
        } `}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />
      <button
        className={`outline-red-600 h-[50px] border-pink-600 bg-green-500 w-20 text-white rounded-md  transition-all duration-300`}
        onClick={formHandle}
      >
        ADD
      </button>
    </div>
  );
};

export default TodoAdd;

// onChange={(e) => setForm({ ...form, content: e.target.value })}
// onClick={() => postHandle(form)}
