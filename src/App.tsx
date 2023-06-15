import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import GameGrid from './components/gameGrid'
import GenreList from './components/genreList'
import { useState } from 'react';
import { Genre } from './hooks/useGenre'
import { Platform } from './hooks/useGame'
import PlatformSelector from './components/platformSelector'
import SortSelector from './components/sortSelector'

function App() {

  const[selectedGenre, setSelectedGenre] =useState<Genre | null>(null);
  const[selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);


  return (
    <Grid templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"`}}
      templateColumns={{base: '1fr', lg: '200px 1fr'}}>

        <GridItem area="nav">
          <NavBar/>
        </GridItem>

        <Show above='lg'>
          <GridItem area="aside" paddingX={5}>
            <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre}/>
          </GridItem>
        </Show>

        <GridItem area="main" padding={8} paddingTop={0}>
          <HStack spacing={3} marginBottom={5}>
            <PlatformSelector onSelectPlatform={(platform) => setSelectedPlatform(platform)}  selectedPlatform={selectedPlatform}/>
            <SortSelector/>
          </HStack>
          <GameGrid selectedGenre={selectedGenre}  selectedPlatform={ selectedPlatform}/>
        </GridItem>

    </Grid>
  )
}

export default App
