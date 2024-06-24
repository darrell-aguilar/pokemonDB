import '../css/PokemonContainer.scss';
import { useGetPokemonListQuery } from '../utils/apiSlice';
import PokemonCard from './PokemonCard';

export default function PokemonContainer() {
  const { data, isLoading } = useGetPokemonListQuery({ limit: 20, offset: 0 });
  if (isLoading)
    return (
      <div className="main">
        <div className="load-screen">
          <h3 className="fetch-header">Data is being fetched...</h3>
          <div className="loading-icon"></div>
        </div>
      </div>
    );
  else
    return (
      <div className="main">
        {data?.map((pokemon: any, index: number) => (
          <PokemonCard
            props={{ ...pokemon, index }}
            key={pokemon.name}
          />
        ))}
      </div>
    );
}
