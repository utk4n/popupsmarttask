import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: JSON.parse(localStorage.getItem("theme")) || "light",
  reducers: {
    switchTheme: (state) => {
      localStorage.setItem(
        "theme",
        JSON.stringify(state === "light" ? "dark" : "light")
      );
      return state === "light" ? "dark" : "light";
    },
  },
});

export default themeSlice.reducer;

export const { switchTheme } = themeSlice.actions;
