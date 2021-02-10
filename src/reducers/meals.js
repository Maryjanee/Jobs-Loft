import { GET_MEALS_PENDING, GET_MEALS_SUCCESS, GET_MEALS_ERROR } from '../constants';

const initialState = {
  pending: false,
  meals: [],
  error: null,
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEALS_PENDING:
      return { ...state, pending: true };
    case GET_MEALS_SUCCESS:
      return { ...state, pending: false, meals: action.payload };
    case GET_MEALS_ERROR:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
};

export default mealReducer;
