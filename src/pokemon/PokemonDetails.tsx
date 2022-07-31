import React, { useEffect, useState } from 'react';
import { PokemonDetail } from './interfaces/PokemonDetail';
import { getPokemonDetails } from './services/getPokemonsDetails';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';

interface PokemonDetailsProps {
    
}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
    const {name} = useParams();
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined);

    useEffect(() => {
         if(!name) return; // se não for nulo

         getPokemonDetails(name).then((response) => setSelectedPokemonDetails(response)) 

    }, [name]); //Ao atualizar alguma informação nessa variável, ocorrerá o efeito (ao clicar no botão, a variável de detalhes irá receber os dados do pokemon selecionado )

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
                      Pokemon selecionado: {name}
                    </Typography>
                    <Button color="inherit">Login</Button>
                  </Toolbar>
            </AppBar>

            <Container maxWidth="lg">
                <Box mt={2}>

                    <img src={selectedPokemonDetails?.sprites.front_default} alt="" />

                    {/* <h2>Pokemon selecionado: {selectedPokemon?.name || "Nenhum pokemon selecionado"}</h2>  */}
                    
                    {JSON.stringify(selectedPokemonDetails?.sprites.front_default, undefined, 2)} {/*Se existir, retorna o sprite do pokemon selecionado */}

                </Box>
            </Container>
            

        </div>
    );
};

export default PokemonDetails;