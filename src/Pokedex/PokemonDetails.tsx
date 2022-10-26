import { useQuery } from 'react-query';
import { useParams } from 'react-router';

const PokemonDetails = () => {
  const { name } = useParams<{ name: string }>();
  const { data, isLoading } = useQuery(
    ['pokemon-detail', name],
    async () => {
      return await fetch('https://pokeapi.co/api/v2/pokemon/' + name).then(
        (res) => res.json()
      );
    },
    {
      staleTime: 600_00,
    }
  );

  return <>{!isLoading && JSON.stringify(data)}</>;
};

export default PokemonDetails;
