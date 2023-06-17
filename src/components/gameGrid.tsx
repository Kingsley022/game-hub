import { SimpleGrid, Text, Button } from "@chakra-ui/react";
import useGame, { Game, Platform } from "../hooks/useGame";
import GameCard from "./gameCard";
import GameCardSkeleton from "./gameCardSkeleton";
import GameCardContainer from "./gameCardContainer";
import { Genre } from "src/hooks/useGenre";
import React from "react";

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
    selectedSortOrder: string;
    searchText: string;
}

const GameGrid = ({ selectedGenre,  selectedPlatform, selectedSortOrder, searchText}:Props) => {
    
    const {games, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage} = useGame(selectedGenre,  selectedPlatform, selectedSortOrder, searchText);
    const Skeletons = [1,2,3,4,5,6, 7, 8, 9, 10];

    if(error) return <Text> {error.message}</Text>

    return (
        <>
            <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={6} marginTop='8px'>
                {isLoading && Skeletons.map(skeleton => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                ))}
                {games?.pages.map((page, index) =>(
                    <React.Fragment key={index}>
                        {page.results.map(game => (
                            <GameCardContainer key={game?.id}>
                                <GameCard game={game}/> 
                            </GameCardContainer>
                        ))}
                    </React.Fragment>  
                ))}
            
            </SimpleGrid>

            {hasNextPage && (
                <Button onClick={() => fetchNextPage()} marginTop={3}>
                    {isFetchingNextPage ? 'Loading...' : 'Load More'}
                </Button>
            )}
        </>
    );
}
 
export default GameGrid;