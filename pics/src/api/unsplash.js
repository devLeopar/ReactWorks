import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID oDgu0PwiQVyHXEjdssePa3Q6I1kRklqZctu_PsAUA20'
    }
});
