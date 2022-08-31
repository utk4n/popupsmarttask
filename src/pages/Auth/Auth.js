import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthActions from "../../components/AuthActions/AuthActions";
const Auth = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user !== null) {
      navigate("/todos");
    }
  }, []);

  const loginHandle = () => {
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/todos");
  };

  return (
    <div className=" h-screen flex items-center justify-center ">
      <AuthActions user={user} setUser={setUser} loginHandle={loginHandle} />
    </div>
  );
};

export default Auth;
