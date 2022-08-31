const AuthActions = ({ user, setUser, loginHandle }) => {
  const loginController = user.length < 3;

  return (
    <div className="flex items-center flex-col gap-5 p-10 justify-center border-2 rounded-lg h-auto w-auto shadow-md bg-white">
      <p className="text-red-500 font-bold">Must be at least 3 characters.</p>
      <input
        placeholder="Please enter a nickname!"
        className="bg-transparent outline-none border-2 shadow-lg p-4 border-slate-00 rounded-md"
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button
        disabled={loginController}
        className={`rounded-md shadow-lg bg-green-500 text-white p-4 w-full ${
          loginController && "bg-gray-500"
        }`}
        type="button"
        onClick={loginHandle}
      >
        Login
      </button>
    </div>
  );
};

export default AuthActions;
