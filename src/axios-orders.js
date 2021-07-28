import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burguers-default-rtdb.firebaseio.com/'
});

export default instance;