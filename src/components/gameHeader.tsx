import { Heading } from "@chakra-ui/react";
import { Genre } from './../hooks/useGenre';
import { Platform } from "src/hooks/useGame";

interface Props {
    gameQuery: {
      selectedGenre: Genre | null;
      selectedPlatform: Platform | null;
      selectedSortOrder: string;
      searchText: string;
    };
  }

const GameHeader = ({gameQuery}:Props) => {

    const heading = `${gameQuery?.selectedGenre?.name || ''} ${gameQuery?.selectedPlatform?.name || ''} Games`;

    return (
        <Heading as='h1' marginBottom={3} fontSize='5xl'>{heading}</Heading>
    );
}
 
export default GameHeader;