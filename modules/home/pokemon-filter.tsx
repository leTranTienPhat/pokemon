import { getPokemonTypes } from '@/api/pokemon';
import { Suspense } from 'react';
import { FilterLink } from './client/filter-link';

export const PokemonFilter = async () => {
  'use cache';
  const pokemonTypes = await getPokemonTypes();

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-center gap-4">
        <p className="font-bold">Types: </p>
        {pokemonTypes.results.map((type) => (
          <Suspense key={type.name} fallback={<></>}>
            <FilterLink name={type.name} />
          </Suspense>
        ))}
      </div>
    </section>
  );
};
