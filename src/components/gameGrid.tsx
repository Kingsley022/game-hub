import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame, { Platform } from "../hooks/useGame";
import GameCard from "./gameCard";
import GameCardSkeleton from "./gameCardSkeleton";
import GameCardContainer from "./gameCardContainer";
import { Genre } from "src/hooks/useGenre";

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre,  selectedPlatform}:Props) => {
    
    const {games, error, isLoading} = useGame(selectedGenre,  selectedPlatform);
    const Skeletons = [1,2,3,4,5,6, 7, 8, 9, 10];

    return (
        <>
            {error && <Text> {error} </Text>}
            <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={3} marginTop='8px'>
                {isLoading && Skeletons.map(skeleton => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                ))}
                {games?.map(game => ( 
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}/> 
                    </GameCardContainer>
                ))}
            </SimpleGrid>
            
        </>
    );
}
 
export default GameGrid;