import useAPI from "../../hooks/useAPI";
import useToastify from "../../hooks/useToastify";

const Modal = ({ display, setDisplay, todoID, form, setForm }) => {
  const { putHandle } = useAPI();
  const { notifyEdit } = useToastify();

  const editTodoHandle = async () => {
    await putHandle(todoID, form);
    setDisplay(false);
    setForm({ ...form, content: "" });
    notifyEdit();
  };

  return (
    <div
      className={`absolute top-[75px] left-52 ${display ? "block" : "hidden"}`}
    >
      <div className=" border-2 rounded-md shadow-md bg-slate-200 flex items-center flex-col justify-center w-[200px] h-[200px]">
        <textarea
          className="outline-green-500"
          maxLength={100}
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        >
          {form.content}
        </textarea>
        <div className="flex items-center justify-center p-3">
          <button
            className=" w-[75px] bg-green-500 text-white p-2 rounded-md"
            onClick={editTodoHandle}
          >
            Save
          </button>
          <button
            className=" w-[75px] ml-2 bg-red-600 text-white p-2 rounded-md"
            onClick={() => setDisplay((prev) => !prev)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
