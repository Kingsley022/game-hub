import axios from "axios";
import { Genre } from "./useGenre";
import { useQuery } from '@tanstack/react-query';

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
    rating_top: number;
}


const useGame = (selectedGenre:Genre | null,  selectedPlatform: Platform | null, selectedSortOrder: string, searchText:string) => {

        const { data: games, isLoading, error } = useQuery<Game[], Error>(['games', selectedGenre, selectedPlatform, selectedSortOrder, searchText], async () => {
            const response = await axios.get('https://api.rawg.io/api/games?key=cb5b4d28d59a4896ba781fff32784a2d', {
                params: {
                    genres: selectedGenre?.id,
                    parent_platforms: selectedPlatform?.id,
                    ordering: selectedSortOrder,
                    search: searchText
                }
            });

            return response.data.results;
        });
        

    
    return {games, error, isLoading};
}
 
export default useGame;