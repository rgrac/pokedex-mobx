import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { detailsFetcher } from '../Api';

const PokemonDetails = () => {
  const { name } = useParams<{ name: string }>();
  const { data, isLoading } = useQuery(
    ['pokemon-detail', name],
    detailsFetcher(name),
    {
      staleTime: 600_00,
    }
  );

  return <>{!isLoading && JSON.stringify(data)}</>;
};

export default PokemonDetails;
