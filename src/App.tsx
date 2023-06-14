import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import GameGrid from './components/gameGrid'

function App() {
  return (
    <Grid templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"`}}>

        <GridItem area="nav">
          <NavBar/>
        </GridItem>

        <GridItem area="aside">
          Aside
        </GridItem>

        <GridItem area="main">
          <GameGrid/>
        </GridItem>

    </Grid>
  )
}

export default App
