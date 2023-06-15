import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { Genre } from "./useGenre";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform}[]; //use this when returning nexted objects
    metacritic: number;
}

interface FetchGamesResponse{
    count: number;
    results: Game[]
}

const useGame = (selectedGenre:Genre | null,  selectedPlatform: Platform | null, selectedSortOrder: string) => {
    const[games, setGames] = useState<Game[]>([]);
    const[error, setError] = useState('');
    const[isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        axios.get<FetchGamesResponse>('https://api.rawg.io/api/games?key=cb5b4d28d59a4896ba781fff32784a2d', {
        signal: controller.signal,
        params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id, ordering: selectedSortOrder},
        })
        .then(res => {
            setGames(res.data.results);
            setIsLoading(false);
        })
        .catch( err =>  {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setIsLoading(true);
        });

        return () => controller.abort();
    }, [selectedGenre,  selectedPlatform, selectedSortOrder]);

    
    return {games, error, isLoading};
}
 
export default useGame;