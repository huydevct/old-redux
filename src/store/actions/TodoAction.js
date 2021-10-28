// export const markComplete = () => {
//     const markCompleteAction = dispatch => {
//         dispatch({
//             type: 'MARK_COMPLETED',
//             payload: 'my payload',
//         })
//     }

import axios from "axios";
import { ADD_TODO, DELETE_TODO, GET_TODOS, MARK_COMPLETED } from "../type";

//     return markCompleteAction;
// }

export const getTodos = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=3"
    );
    dispatch({
      type: GET_TODOS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const markComplete = (id) => (dispatch) => {
  dispatch({
    type: MARK_COMPLETED,
    payload: id,
  });
};

export const addTodo = (newTodo) => async (dispatch) => {
  try {
    await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
    dispatch({
      type: ADD_TODO,
      payload: newTodo,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
