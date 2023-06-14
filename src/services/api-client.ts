import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api/games",
    params: {
        key: "cb5b4d28d59a4896ba781fff32784a2d"
    }
});