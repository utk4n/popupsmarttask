import { BsEmojiSmile } from "react-icons/bs";

const UserInfo = () => {
  return (
    <p className="font-bold text-2xl flex items-center text-orange-400">
      Hello, {JSON.parse(localStorage.getItem("user"))}
      <BsEmojiSmile color="orange" />
    </p>
  );
};

export default UserInfo;
