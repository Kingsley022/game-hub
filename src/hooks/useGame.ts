import axios from "axios";
import { useEffect, useState } from "react";

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

const useGame = () => {
    const[games, setGames] = useState<Game[]>([]);
    const[error, setError] = useState('');
    const[isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        axios.get<FetchGamesResponse>('https://api.rawg.io/api/games?key=cb5b4d28d59a4896ba781fff32784a2d', {signal : controller.signal})
        .then(res => {
            setGames(res.data.results);
            setIsLoading(false);
        })
        .catch(err =>  {
            setError(err.message);
            setIsLoading(true);
        });

        return () => controller.abort();
    }, []);

    
    return {games, error, isLoading};
}
 
export default useGame;