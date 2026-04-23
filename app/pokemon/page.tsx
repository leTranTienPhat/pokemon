import { PokemonCount } from '@/modules/home/pokemon-count';
import { PokemonFilter } from '@/modules/home/pokemon-filter';
import { PokemonList } from '@/modules/home/pokemon-list';
import { PokemonSearchParams } from '@/types/pokemon';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Home({
  searchParams,
}: {
  searchParams: Promise<PokemonSearchParams>;
}) {
  return (
    <section className="container mx-auto space-y-5">
      <Link href="/">
        <h1 className="text-center font-bold">Welcome to Pokemon world</h1>
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <PokemonCount searchParams={searchParams} />
      </Suspense>
      <PokemonFilter />
      <Suspense fallback={<></>}>
        <PokemonList searchParams={searchParams} />
      </Suspense>
    </section>
  );
}
