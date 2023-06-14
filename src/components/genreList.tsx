import { HStack, List, ListItem, Image, Button, Spinner} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/getcroppedImageUrl";

interface Props{
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
    const{genres, isLoading} = useGenre();
    {if(isLoading) return <Spinner/>}
    return (
        <List>
            {genres.map( genre => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                        <Button fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'} fontSize='large' variant='link' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
}
 
export default GenreList;