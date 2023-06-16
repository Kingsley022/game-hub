import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from './../hooks/useGame';
import PlatFormIconList from './platformIconList';
import CriticScore from './criticScore';
import getCroppedImageUrl from '../services/getcroppedImageUrl';
import Emoji from './emoji';


interface Props{
    game: Game;
}

const GameCard = ({game}:Props) => {

    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatFormIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading fontSize='1xl'>{game.name} <Emoji rating={game.rating_top}/></Heading>
            </CardBody>
        </Card>
    );
}
 
export default GameCard;