import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3333/api/v1'
    //baseURL: 'https://silver1-api.herokuapp.com/api/v1'
    // https://silver1-api.herokuapp.com/api/v1/
});

export default instance;
