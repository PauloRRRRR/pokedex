import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { PokemonListInterface } from '../../pokemon/services/listPokemons';

interface PokedexCardProps {
    pokemon: PokemonListInterface;

}

const Card = styled.section`
    padding: 4em;
    background: papayawhip;
    border-radius: .5em;
`;

export const PokedexCard: React.FC<PokedexCardProps> = ({pokemon}) => {

    const navigate = useNavigate();


    function handleClick(){
        navigate(`/pokemon/${pokemon.name}`);
    } //evento handleClick que será responsável por acessar o URl de determinado nome do objeto e receberá como parâmetro a interface dos Pokemons

    return (
        <Card onClick={handleClick}>
            {pokemon.name}
        </Card>
    );
};

export default PokedexCard;