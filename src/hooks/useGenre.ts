import axios from "axios";
import { useQuery } from '@tanstack/react-query';

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}
// interface FetchGenreResponse{
//     count: number;
//     results: Genre[];
// }
const useGenre = () => {

    const{data:genres, isLoading, error} = useQuery<Genre[]>(['genres'], async () => {
        const response  = await axios.get('https://api.rawg.io/api/genres?key=cb5b4d28d59a4896ba781fff32784a2d');
        return response.data.results
    });

    return {genres, error, isLoading};
}
 
export default useGenre;