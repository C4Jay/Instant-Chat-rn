import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://wedding-planner-project.firebaseio.com/'
})

export default instance;