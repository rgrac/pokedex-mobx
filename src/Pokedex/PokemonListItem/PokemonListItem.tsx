import { Link } from 'react-router-dom';
import styles from './PokemonListItem.module.css';

const PokemonListItem = ({ data }: any) => (
  <Link to={`/details/${data.name}`} className={styles['item-container']}>
    <div>
      <img src={data.sprites.front_default} alt='' height={96} width={96} />
    </div>
    <div className={styles['item-content']}>
      <div>
        #{data.id} <strong>{data.name}</strong>
      </div>
      <div>Types: {data.types.map((t: any) => t.type.name).join(', ')}</div>
    </div>
  </Link>
);
export default PokemonListItem;
