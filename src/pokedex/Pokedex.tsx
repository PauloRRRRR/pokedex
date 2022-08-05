import React, { useContext, useEffect, useState } from 'react';
import { PokemonDetail } from '../pokemon/interfaces/PokemonDetail';
import { listPokemons } from '../pokemon/services/listPokemons';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import PokedexCard from './components/PokedexCard';
import { useQuery } from '@tanstack/react-query';
import { Badge, CircularProgress, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Favorite } from '@mui/icons-material';
import { FavoriteContext } from '../favorites/FavoriteContext';


interface PokedexProps {
    
}



 const Pokedex: React.FC<PokedexProps> = () => {
    // const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
    const { favorites, setFavorites } = useContext(FavoriteContext);
    const push = useNavigate();

    const { data, isLoading, isRefetching, refetch, isStale} 
    = useQuery(['listPokemons'], listPokemons,{
        onError: (error) => console.log('Erro'),
        onSettled: (data) => console.log('Settled'),
    });
    const favoritesCount = favorites.length;

    const addPokemonToFavorite = (pokemon: PokemonDetail) =>{
        setFavorites([...favorites, pokemon]);
    }

    // useEffect(() => {
    //     listPokemons().then((response) => 
    //     setPokemons(response.results))
    // }, []); 

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
                      <Box sx={{ flexGrow: 1 }} />
                      {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                          size="large"
                          aria-label="show more"
                          aria-haspopup="true"
                          onClick={() => push('/favoritos')}
                          color="inherit"
                        >
                          <Badge badgeContent={favoritesCount} color="secondary">
                            <Favorite />
                          </Badge>
                        </IconButton>
                      </Box> */}
                  </Toolbar>
                  {isRefetching && <LinearProgress variant='indeterminate' color='secondary'/>}
            </AppBar>

            <Container maxWidth="lg">
              {/* <pre>{JSON.stringify(favorites, undefined, 2)}</pre> */}
                <div style={{marginTop: `1em`}}></div>
                {isStale && (
                    <Button disabled={isRefetching} variant = 'outlined'onClick={()=>refetch()}>Refetch</Button>)
                }
                <div style={{marginTop: `1em`}}></div>
                {!isLoading ? (
                    <Grid container spacing={2}>
                        {data?.results.map((pokemon) => ( //Mapeamento de cada pokemon, onde cada um será um botão e também será passado para chamar o handleClick
                            <>
                                <Grid item xs={6} lg={3}> 
                                    <PokedexCard pokemon={pokemon}/>
                                </Grid> 
                                
                            </>
                        ))}
                        
                    </Grid>
            ) : (
              <div><CircularProgress/></div>
            )}       
            </Container>
        </div>
    );
};

export default Pokedex;