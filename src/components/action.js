import axios from "axios";
import {
  DECCREMENT,
  GET_TODOS_FAILED,
  GET_TODOS_REQUIEST,
  GET_TODOS_SUCCESS,
  INCREMENT,
  RESET,
} from "./actionTypes";

export const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
export const deccrementCounter = () => {
  return {
    type: DECCREMENT,
  };
};
export const resetCounter = () => {
  return {
    type: RESET,
  };
};

// TODOS ACTIONS

export const getAllTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODOS_REQUIEST });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TODOS_FAILED, payload: error.message });
  }
};
