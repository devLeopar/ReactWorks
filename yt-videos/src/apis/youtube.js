import axios from 'axios';


const KEY = 'AIzaSyCQ0FdfNgZ97hoR1r1MrDT4P2t_wuO4n5A';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params:{
   part: 'snippet',
   type: 'video',
   maxResults: 5,
   key: KEY
    }
});