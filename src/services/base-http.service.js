import axios from 'axios';

export default class BaseHttpService {
  BASE_URL = 'https://cybersports.herokuapp.com';

  async get(endpoint = '', options = {}) {
    Object.assign(options);
    return axios
      .get(`${this.BASE_URL}/${endpoint}`, options)
      .then(res => res.data)
      .catch(error => {throw error});
  }

  async post(endpoint = '', data = {}, options = {}) {
    Object.assign(options);
    return axios
      .post(`${this.BASE_URL}/${endpoint}`, data, options)
      .catch(error => {throw error});
  }

  async put(endpoint = '', data = {}, options = {}) {
    Object.assign(options);
    return axios
      .put(`${this.BASE_URL}/${endpoint}`, data, options)
      .catch(error => {throw error});
  }

  async delete(endpoint = '', options = {}) {
    Object.assign(options);
    return axios
      .delete(`${this.BASE_URL}/${endpoint}`, options)
      .catch(error => {throw error});
  }

  async patch(endpoint = '', data = {}, options = {}) {
    Object.assign(options);
    return axios
      .patch(`${this.BASE_URL}/${endpoint}`, data, options)
      .catch(error => {throw error});
  }
}
