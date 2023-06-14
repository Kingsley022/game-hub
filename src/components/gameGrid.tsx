import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./gameCard";
import GameCardSkeleton from "./gameCardSkeleton";

const GameGrid = () => {
    
    const {games, error, isLoading} = useGame();
    const Skeletons = [1,2,3,4,5,6, 7, 8, 9, 10];

    return (
        <>
            {error && <Text> {error} </Text>}
            <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} spacing={10} padding={10}>
                {isLoading && Skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
                {games?.map(game => ( <GameCard key={game.id} game={game}/> ))}
            </SimpleGrid>
            
        </>
    );
}
 
export default GameGrid;