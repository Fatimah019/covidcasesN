import * as actionTypes from "../Actions/types";

const initialState = {
  covidcases: [],
};

const covid = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COVID_CASES_NIGERIA:
      return {
        ...state,
        covidcases: action.payload,
      };
    default:
      return state;
  }
};
export default covid;
