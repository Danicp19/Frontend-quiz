import { createSlice } from "@reduxjs/toolkit";
import { Data, HomeState } from "@lib/definitions"

const initialState: HomeState = {
  name: "",
  icon: "",
  quizzes: [],
  darkMode: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    selectQuiz(state, action) {
      state.name = action.payload;
    },
    selectIcon(state, action) {
      state.icon = action.payload;
    },
    setQuizzes(state, action) {
      state.quizzes = action.payload;
    },
    resetMode(state) {
      state.name = initialState.name;
      state.icon = initialState.icon;
      state.quizzes = initialState.quizzes;
    },
    setDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { selectQuiz, selectIcon, setQuizzes, resetMode, setDarkMode } =
  homeSlice.actions;
export default homeSlice.reducer;