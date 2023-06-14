import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from './../hooks/useGame';
import PlatFormIconList from './platformIconList';
import CriticScore from './criticScore';
import getCroppedImageUrl from '../services/getcroppedImageUrl';


interface Props{
    game: Game;
}

const GameCard = ({game}:Props) => {

    return (
        <Card borderRadius={12} overflow='hidden'>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <Heading fontSize='1xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatFormIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    );
}
 
export default GameCard;