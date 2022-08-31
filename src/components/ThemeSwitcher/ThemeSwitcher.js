import { switchTheme } from "../../redux/themeSlice";
import { useSelector, useDispatch } from "react-redux";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(switchTheme())}>
      {theme === "light" ? (
        <BsFillMoonFill color="#081539" fontSize={"35px"} />
      ) : (
        <BsSunFill color="yellow" fontSize={"35px"} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
