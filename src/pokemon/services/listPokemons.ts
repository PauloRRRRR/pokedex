import axios from "axios";

export interface PokemonListInterface{
    name: string;
    url: string;
}

interface listPokemonsInterface{
    count: number;
    next: null | string;
    previous: null | string;
    results: PokemonListInterface[]
}
// estou setando os botões a partir dos pokemons já existentes na API
export async function listPokemons(): Promise<listPokemonsInterface>{ //listagem dos pokemons através de uma url da API
    const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon`;
    const response = await axios.get<listPokemonsInterface>(endpoint);

    return response.data;
}