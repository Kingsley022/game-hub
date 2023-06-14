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
    parent_platforms: { platform: Platform}[]
}

interface FetchGamesResponse{
    count: number;
    results: Game[]
}

const useGame = () => {
    const[games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        const controller = new AbortController();
        axios.get<FetchGamesResponse>('https://api.rawg.io/api/games?key=cb5b4d28d59a4896ba781fff32784a2d', {signal : controller.signal})
        .then(res => setGames(res.data.results))
        .catch(err =>  console.log(err.message));

        return () => controller.abort();
    }, []);

    
    return {games};
}
 
export default useGame;