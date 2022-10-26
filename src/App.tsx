import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserHistory } from 'history';
import { Router, Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';

const PokemonList = lazy(() => import('./Pokedex/PokemonList'));
const PokemonDetails = lazy(() => import('./Pokedex/PokemonDetails'));
const history = createBrowserHistory();
const queryClient = new QueryClient();

const App = () => {
  return (
    <Suspense fallback={<>Loading ... </>}>
      <Router location={history.location} navigator={history}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route element={<PokemonList />} path='/' />
            <Route element={<PokemonDetails />} path='/details/:name' />
          </Routes>
        </QueryClientProvider>
      </Router>
    </Suspense>
  );
};

export default App;
