import { useQuery } from 'react-query';
import PokemonListItemWrapper from './PokemonListItem';

const PokemonList = () => {
  const { data, isLoading } = useQuery(
    'pokemon-list',
    async () => {
      return await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
      ).then((res) => res.json());
    },
    {
      staleTime: 600_000,
    }
  );

  return (
    <>
      {!isLoading &&
        data.results.map((e: any) => (
          <PokemonListItemWrapper key={e.name} {...e} />
        ))}
    </>
  );
};

export default PokemonList;
