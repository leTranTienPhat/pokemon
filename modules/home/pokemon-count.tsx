import { getPokemons } from '@/api/pokemon';
import { PokemonSearchParams } from '@/types/pokemon';

export const PokemonCount = async ({
  searchParams,
}: {
  searchParams: Promise<PokemonSearchParams>;
}) => {
  const { page, type } = await searchParams;
  const pageNumber = page ? parseInt(page, 10) : 1;
  const pokemonData = await getPokemons(pageNumber, type);

  return (
    <p>
      <b>Total Count:</b> {pokemonData.count}
    </p>
  );
};
