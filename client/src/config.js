import axios from 'axios';

const baseURL = 'http://localhost:5000/api';
const imageURL = 'http://localhost:5000/uploads/';

export default axios.create({
    baseURL: baseURL,
    responseType: 'json'
});

export { baseURL, imageURL };