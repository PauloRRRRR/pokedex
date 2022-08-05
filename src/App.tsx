import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Pokedex from './pokedex/Pokedex';
import { FavoriteProvider } from './favorites/FavoriteContext';
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PokemonDetails from './pokemon/PokemonDetails';

interface AppProps{

}

const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      retry: false,
    }
  }
})

const App: React.FC<AppProps> = () =>{
  return ( //router para navegar entre páginas
    <QueryClientProvider client={queryClient}>
        <BrowserRouter >
            <Routes>
              <Route path="/" element={<Pokedex />}> 
              </Route>
              <Route path="/pokemon/:name" element={<PokemonDetails/>}>
              </Route>
              <Route path="/favoritos" element={<PokemonDetails/>}>
              </Route>
            </Routes>
        </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App;
