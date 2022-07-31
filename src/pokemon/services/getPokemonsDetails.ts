import axios from "axios";
import { PokemonDetail } from "../interfaces/PokemonDetail";


export interface PokemonListInterface{
    name: string;
    url: string;
}

interface getPokemonDetailsInterface{
    count: number;
    next: null | string;
    previous: null | string;
    results: PokemonListInterface[]
}

export async function getPokemonDetails(name: string): Promise<PokemonDetail>{
    const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon/${name}`;//utilizo o Url da API para buscar o nome do objeto(Pokemon)
    const response = await axios.get<PokemonDetail>(endpoint); 

    return response.data;
}