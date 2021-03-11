import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from './ApiActions';
import axios from 'axios';
import { tournamentsDataNew } from '../../pages/MainPage/newPageProps';
import { usersData } from '../../../tournamentDetails/usersData';
import { matchesData } from '../../../matchDetails/matchesData';
import { randomPlayersDataForBack } from '../../../tournamentDetails/services/randomPlayersDataForBack';

const url = 'https://cybersports.herokuapp.com';

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

const model = 'users';

export const postAllTournaments = () => {
  tournamentsDataNew.map(elem => {
    return axios
      .post('http://localhost:5000/tournaments',elem,
      // {
      //   headers: {
      //     'Content-Type': ' text/html; charset=utf-8', //'application/json'
      //   },
      // }
      )
      .catch(error => console.log(error));
  });
};

// export const postAllTournaments = () =>
//   usersData.map(elem => {
//     return axios
//       .post("https://cybersports.herokuapp.com/users", elem, {})
//       .catch(error => console.log(error));
//   });

// http://localhost:5000/users

let AllUsers;

export const getAllUsers = () => {
  return axios
    .get('https://cybersports.herokuapp.com/users')
    .then(res => AllUsers = res.data.result)
    // .then(res => console.log(AllUsers))
    .catch(error => console.log(error));
};

// setTimeout(()=>console.log(AllUsers),1000)

export const postAllMatches = () =>
matchesData.map(elem => {
    return axios
      .post("https://cybersports.herokuapp.com/matches", elem, {})
      .catch(error => console.log(error));
  });

  let AllMatches;
  export const getAllMatches = () => {
    return axios
      .get('https://cybersports.herokuapp.com/matches')
      .then(res => AllMatches = res.data.result)
      // .then(res => console.log(AllUsers))
      .catch(error => console.log(error));
  };

  // setTimeout(()=>console.log(AllMatches),1000)

  export const getOneTournament = () => {
    return axios
      .get('http://localhost:5000/tournaments/6047db2dc5ebd30620a8d5f8')
      .then(res => console.log(res.data) )
      // .then(res => console.log(AllUsers))
      .catch(error => console.log(error));
  };



  export const postAllPlayers = () =>
  randomPlayersDataForBack.map(elem => {
      return axios
        .post("http://localhost:5000/players", elem, {})
        .catch(error => console.log(error));
    });