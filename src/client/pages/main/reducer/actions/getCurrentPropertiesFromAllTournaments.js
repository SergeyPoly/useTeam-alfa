import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from './ApiActions';
import axios from 'axios';

const url = 'https://cybersports.herokuapp.com/';

export const getCurrentPropertiesFromAllTournaments = (model, propertiesArray) => {
  const action = async dispatch => {
    dispatch({ type: FETCH_DATA_PENDING });

    try {
      const fullURL = url + model;
      const { data } = await axios.get(fullURL, propertiesArray);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: FETCH_DATA_ERROR, payload: err });
    }
  };
  return action;
};
