import useAPI from "../../hooks/useAPI";
import useToastify from "../../hooks/useToastify";

const Modal = ({ display, setDisplay, todoID }) => {
  const { deleteHandle } = useAPI();
  const { notifyDeleted } = useToastify();

  const deleteTodoHandle = async () => {
    await deleteHandle(todoID);
    setDisplay(false);
    notifyDeleted();
  };

  return (
    <div
      className={`  ${display ? " translate-y-full fixed top-0" : "hidden"}`}
    >
      <div className=" border-2 rounded-md shadow-md z-30 bg-slate-200 flex items-center flex-col justify-center w-[200px] h-[200px]">
        <p className="mb-3 text-red-400 text-2xl">Are you sure?</p>
        <div className="flex items-center justify-center z-10">
          <button
            className="bg-red-600 text-white p-2 rounded-md"
            onClick={deleteTodoHandle}
          >
            Delete
          </button>
          <button
            className="bg-green-500 p-2 rounded-md ml-2 text-white"
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
