import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const useToastify = () => {
  const notifySuccess = () =>
    toast("Todo added successfully✅️.", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyError = () =>
    toast("Content must be at least 3 characters⛔!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyDeleted = () =>
    toast("Todo deleted✅️!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyEdit = () =>
    toast("Todo edited✅️!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return { notifySuccess, notifyError, notifyDeleted, notifyEdit };
};

export default useToastify;
