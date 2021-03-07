import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from './ApiActions';
import axios from 'axios';

const url = 'https://cybersports.herokuapp.com/';

// const url = 'http://localhost:5000/';

let createFullUrl = (model, propertiesArray) => {
  let fullURL;
  !propertiesArray
    ? (fullURL = url + model)
    : (fullURL = `${url}${model}'?'${propertiesArray.join('&')}`);
  return fullURL;
};

export const getAllTournaments = (model, propertiesArray) => {
  const action = async dispatch => {
    dispatch({ type: FETCH_DATA_PENDING });

    try {
      const { data } = await axios.get(createFullUrl(model, propertiesArray));
      dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: FETCH_DATA_ERROR, payload: err });
    }
  };
  return action;
};
