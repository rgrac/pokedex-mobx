import { useQuery } from 'react-query';
import { listFetcher } from '../Api';
import PokemonListItemWrapper from './PokemonListItem';

const PokemonList = () => {
  const { data, isLoading } = useQuery('pokemon-list', listFetcher(), {
    staleTime: 600_000,
  });

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
