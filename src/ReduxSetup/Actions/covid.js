import * as actionTypes from "./types";
import axios from "axios";
import { toast } from "react-toastify";

// fetch covid cases in Nigeria
export const fetchCovidCasesInNigeria = () => (dispatch) => {
  axios
    .get("https://covidnigeria.herokuapp.com/api")
    .then((response) => {
      dispatch({
        type: actionTypes.FETCH_COVID_CASES_NIGERIA,
        payload: response.data.data,
      });
      console.log(response.data.data);
    })

    .catch((err) => {
      toast.error(err);
    });
};
