import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}
interface FetchGenreResponse{
    count: number;
    results: Genre[];
}
const useGenre = () => {
    const[genres, setGenres] = useState<Genre[]>([]);
    const[error, setError] = useState('');
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        axios.get<FetchGenreResponse>('https://api.rawg.io/api/genres?key=cb5b4d28d59a4896ba781fff32784a2d')
        .then(res => {
            setGenres(res.data.results);
            setIsLoading(false);
        })
        .catch( err => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setIsLoading(false);
        });

        return () => controller.abort();

    }, []);

    return {genres, error, isLoading};
}
 
export default useGenre;