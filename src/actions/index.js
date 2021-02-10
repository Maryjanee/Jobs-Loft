import { GET_MEALS_ERROR, GET_MEALS_SUCCESS, GET_MEALS_PENDING } from '../constants';

const getMealsPending = () => (
  {
    type: GET_MEALS_PENDING,
  }
);

const getMealsSuccess = meals => (
  {
    type: GET_MEALS_SUCCESS,
    payload: meals,
  }
);

const getMealsError = error => ({
  type: GET_MEALS_ERROR,
  payload: error,
}
);

export { getMealsPending, getMealsSuccess, getMealsError };
