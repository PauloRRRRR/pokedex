import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PokemonDetail } from '../pokemon/interfaces/PokemonDetail';
import { getPokemonDetails } from '../pokemon/services/getPokemonsDetails';
import { listPokemons, PokemonListInterface } from '../pokemon/services/listPokemons';

interface PokedexProps {
    
}



export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined);

    useEffect(() => {
        listPokemons().then((response) => setPokemons(response.results))
    }, []); 

    useEffect(() => {
        if(!selectedPokemon) return; // se não for nulo

        getPokemonDetails(selectedPokemon.name).then((response) => setSelectedPokemonDetails(response)) 

    }, [selectedPokemon]); //Ao atualizar alguma informação nessa variável, ocorrerá o efeito (ao clicar no botão, a variável de detalhes irá receber os dados do pokemon selecionado )

    return (
        <div>
            <h1>Pokedex</h1>

            Pokemons: 
            {pokemons.map((pokemon) => <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>)} {/*Mapeamento de cada objeto(Pokemon) onde cada um será um botão */}

            <h2>Pokemon selecionado: {selectedPokemon?.name || "Nenhum pokemon selecionado"}</h2> {/*Se existir, retorna o nome do pokemon selecionado */}
            {JSON.stringify(selectedPokemonDetails, undefined, 2)} {/* Busco os valores do objeto e retorno todos em forma de string na página */}
        </div>
    );
};

export default Pokedex;