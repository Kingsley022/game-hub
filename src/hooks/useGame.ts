import axios from "axios";
import { Genre } from "./useGenre";
import { useInfiniteQuery } from '@tanstack/react-query';

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
interface FetchResponse{
    count: number;
    results: Game[];
    next: string | null;
}


const useGame = (selectedGenre:Genre | null,  selectedPlatform: Platform | null, selectedSortOrder: string, searchText:string) => {

        
        const { data: games, isLoading, error, fetchNextPage, hasNextPage} = useInfiniteQuery<FetchResponse, Error>(
            ['games', selectedGenre?.id, selectedPlatform?.id, selectedSortOrder, searchText],
            async ({ pageParam = 1 }) => {
              const response = await axios.get('https://api.rawg.io/api/games?key=cb5b4d28d59a4896ba781fff32784a2d', {
                params: {
                  genres: selectedGenre?.id,
                  parent_platforms: selectedPlatform?.id,
                  ordering: selectedSortOrder,
                  search: searchText,
                  page: pageParam
                }
              });
          
              return response.data;
            },
            {
              getNextPageParam: (lastPage, allPages) => {
                return lastPage.next ? allPages.length + 1 : undefined;
              }
            }
          );
          
        

    
    return {games, error, isLoading, fetchNextPage, hasNextPage};
}
 
export default useGame;