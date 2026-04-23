import { getPokemonDetail } from '@/api/pokemon';
import { PokemonCommonData } from '@/types/pokemon';
import Image from 'next/image';

export const PokemonItem = async ({
  pokemon,
}: {
  pokemon: PokemonCommonData;
}) => {
  'use cache';

  const pokemonInfo = await getPokemonDetail(pokemon.url);
  const defaultImageUrl = pokemonInfo.sprites.front_default;
  const animatedGifUrl = pokemonInfo.sprites.other.showdown.front_default;

  const displayImage = animatedGifUrl ?? defaultImageUrl;

  return (
    <div className="flex flex-col items-center gap-1 p-5">
      <p>{pokemonInfo.name}</p>
      <div className="relative size-[80px]">
        {displayImage ? (
          <Image
            src={displayImage}
            alt={pokemonInfo.name}
            fill
            sizes="80px"
            loading="lazy"
            // Set Unoptimized for gif
            unoptimized={!!animatedGifUrl}
          />
        ) : (
          <div className="flex size-full items-center justify-center border border-gray-300">
            No Image
          </div>
        )}
      </div>
      <p>Number: {pokemonInfo.id}</p>
    </div>
  );
};
