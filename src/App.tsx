import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  return (
    <Grid templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "main" "aside"`}}>
        <GridItem area="nav">
          <NavBar/>
        </GridItem>
    </Grid>
  )
}

export default App
