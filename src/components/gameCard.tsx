import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from './../hooks/useGame';
import PlatFormIconList from './platformIconList';


interface Props{
    game: Game;
}

const GameCard = ({game}:Props) => {

    return (
        <Card borderRadius={12} overflow='hidden'>
            <Image src={game.background_image}/>
            <CardBody>
                <Heading fontSize='1xl'>{game.name}</Heading>
                <PlatFormIconList platforms={game.parent_platforms.map(p => p.platform)}/>
            </CardBody>
        </Card>
    );
}
 
export default GameCard;