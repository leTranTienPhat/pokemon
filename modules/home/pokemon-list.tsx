import { getPokemons } from '@/api/pokemon';
import { PokemonItem } from '@/modules/home/pokemon-item';
import { PokemonSearchParams } from '@/types/pokemon';
import Link from 'next/link';
import { ReadonlyURLSearchParams } from 'next/navigation';

export const PokemonList = async ({
  searchParams,
}: {
  searchParams: Promise<PokemonSearchParams>;
}) => {
  const resolvedSearchParam = await searchParams;
  const { page, type } = resolvedSearchParam;
  const pageNumber = page ? parseInt(page, 10) : 1;
  const pokemonData = await getPokemons(pageNumber, type);

  const navigateUrl = (pageNumber: number) => {
    const params = new URLSearchParams(
      resolvedSearchParam as ReadonlyURLSearchParams
    );
    params.set('page', pageNumber.toString());

    return `/pokemon?${params.toString()}`;
  };

  return (
    <div className="space-y-5 text-center">
      <div className="my-5 grid grid-cols-6 gap-5">
        {pokemonData.results.map((pokemon) => (
          <PokemonItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <div className="space-x-5">
        {pokemonData.previous && (
          <Link
            href={navigateUrl(pageNumber - 1)}
            className="rounded-md bg-blue-500 px-4 py-2 text-white"
          >
            Prev
          </Link>
        )}
        {pokemonData.next && (
          <Link
            href={navigateUrl(pageNumber + 1)}
            className="rounded-md bg-blue-500 px-4 py-2 text-white"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
};
