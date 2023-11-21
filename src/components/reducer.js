import {
  DECCREMENT,
  GET_TODOS_FAILED,
  GET_TODOS_REQUIEST,
  GET_TODOS_SUCCESS,
  INCREMENT,
  RESET,
} from "./actionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUIEST:
      return {
        ...state,
        isLoading: true,
      };
      case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos:action.payload,
      };
      case GET_TODOS_FAILED:
        return {
          ...state,
          isLoading: false,
          todos:[],
          error:action.payload
        };

    default:
      return state;
  }
};

// const countReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case DECCREMENT:
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     case RESET:
//       return {
//         ...state,
//         count:0,
//       };

//     default:
//       return state;
//   }
// };

export default todosReducer;
