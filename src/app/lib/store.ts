
import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "../components/home/homeSlice";
// import quizReducer from "./features/quiz/quizSlice";

const store = configureStore({
  reducer: {
    home: homeReducer,
    // quiz: quizReducer,
  },
});
// Exporta el tipo de estado de la raíz
export type RootState = ReturnType<typeof store.getState>;

// Exporta el tipo de despachador de la aplicación
export type AppDispatch = typeof store.dispatch;

export default store;