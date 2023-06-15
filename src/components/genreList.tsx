import { HStack, List, ListItem, Image, Button, Spinner, Heading} from "@chakra-ui/react";
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
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {genres.map( genre => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} objectFit='cover'/>
                            <Button whiteSpace='normal' textAlign='left' fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'} fontSize='large' variant='link' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
}
 
export default GenreList;