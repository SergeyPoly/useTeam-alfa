import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from './ApiActions';
import axios from 'axios';
import { tournamentsDataNew } from '../../pages/MainPage/newPageProps';

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

// export const postAllTournaments = (model, data) => {
//   return axios
//     .post(createFullUrl(model), data, options)
//     .catch(error => this._handleHttpError(error));
// };

export const postAllTournaments =()=> tournamentsDataNew.map((elem) => {
  return axios.post('https://cybersports.herokuapp.com/tournaments', elem)

    .catch(error =>error);
});
// http://localhost:5000/tournaments
postAllTournaments()

