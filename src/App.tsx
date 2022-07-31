import React from 'react';
import logo from './logo.svg';
import Pokedex from './pokedex/Pokedex';
import {PokemonDetail} from './pokemon/interfaces/PokemonDetail';

import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PokemonDetails from './pokemon/PokemonDetails';

const App: React.FC = () =>{
  return ( //router para navegar entre páginas
    <>
      <BrowserRouter >
          <Routes>
            <Route path="/" element={<Pokedex />}>
              
            </Route>
            <Route path="/pokemon/:name" element={<PokemonDetails/>}>

            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
