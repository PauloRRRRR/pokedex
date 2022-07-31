import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PokemonDetail } from '../pokemon/interfaces/PokemonDetail';
import { getPokemonDetails } from '../pokemon/services/getPokemonsDetails';
import { listPokemons, PokemonListInterface } from '../pokemon/services/listPokemons';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';

interface PokedexProps {
    
}



export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);
    const navigate = useNavigate();

    useEffect(() => {
        listPokemons().then((response) => setPokemons(response.results))
    }, []); 

    function handleClick(pokemon: PokemonListInterface){
        navigate(`/pokemon/${pokemon.name}`);
    } //evento handleClick que será responsável por acessar o URl de determinado nome do objeto e receberá como parâmetro a interface dos Pokemons

    return (

        <div>
            <AppBar position="static">
                  <Toolbar>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      Pokedex
                    </Typography>
                  </Toolbar>
            </AppBar>

            <Container maxWidth="lg">
                <Box mt={2}>

                    <Grid container spacing={2}>
                        {pokemons.map((pokemon) => ( //Mapeamento de cada pokemon, onde cada um será um botão e também será passado para chamar o handleClick
                            <>
                                <Grid item xs={6} lg={3}> 
                                    <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {pokemon.name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={() => handleClick(pokemon) }size="small">Abrir</Button> 
                                    </CardActions>
                                    </Card>   
                                </Grid> 
                                
                            </>
                        ))}
                        
                    </Grid>

                   </Box>
            </Container>
        </div>
    );
};

export default Pokedex;