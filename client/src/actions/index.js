import api from "../api";
import {
  SIGN_IN,
  SIGN_OUT,
  LOGIN_FAILED,
  FETCH_GAMES,
  FETCH_CATEGORIES
} from "./types";

export const signIn = values => async dispatch => {
  try {
    const response = await api.post("/login", values);
    dispatch({ type: SIGN_IN, payload: response.data.player });
  } catch {
    dispatch({ type: LOGIN_FAILED });
  }
};

export const signOut = () => {
  return { type: SIGN_OUT };
};

export const fetchGames = () => async dispatch => {
  const response = await api.get("/games");
  dispatch({ type: FETCH_GAMES, payload: response.data });
};

export const fetchCategories = () => async dispatch => {
  const response = await api.get("/categories");
  dispatch({ type: FETCH_CATEGORIES, payload: response.data });
};
