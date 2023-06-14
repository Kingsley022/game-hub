import useGame from "../hooks/useGame";

const GameGrid = () => {
    
    const {games} = useGame();

    return (
        <ul>
            {games?.map(game => (
                <li key={game.id}>{game.name}</li>
            ))}
        </ul>
    );
}
 
export default GameGrid;