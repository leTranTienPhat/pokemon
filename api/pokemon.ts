import {
  PokemonCommonData,
  PokemonCommonDataByType,
  PokemonInfo,
} from '@/types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';
const LIMIT = '24';

interface PokemonCommonResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export const getPokemons = async (
  page: number,
  type?: string
): Promise<PokemonCommonResponse<PokemonCommonData>> => {
  'use cache';

  if (type) {
    const fetchUrl = new URL(`${BASE_URL}/type/${type}/`);

    fetchUrl.searchParams.set(
      'offset',
      ((page - 1) * Number(LIMIT)).toString()
    );
    fetchUrl.searchParams.set('limit', LIMIT);

    const response = await fetch(fetchUrl.toString());

    const data: PokemonCommonDataByType = await response.json();

    const results = [];
    const start = (page - 1) * Number(LIMIT);
    const end = Math.min(page * Number(LIMIT), data.pokemon.length);

    for (let i = start; i < end; i++) {
      results.push(data.pokemon[i].pokemon);
    }
    return {
      count: data.pokemon.length,
      next: end < data.pokemon.length ? `?type=${type}&page=${page + 1}` : null,
      previous: start > 0 ? `?type=${type}&page=${page - 1}` : null,
      results: results,
    };
  }
  const fetchUrl = new URL(`${BASE_URL}/pokemon`);

  fetchUrl.searchParams.set('offset', ((page - 1) * Number(LIMIT)).toString());
  fetchUrl.searchParams.set('limit', LIMIT);

  const res = await fetch(fetchUrl.toString());
  const data: PokemonCommonResponse<PokemonCommonData> = await res.json();
  return data;
};

export const getPokemonTypes = async (): Promise<
  PokemonCommonResponse<PokemonCommonData>
> => {
  const res = await fetch(`${BASE_URL}/type?limit=${LIMIT}`);
  const data: PokemonCommonResponse<PokemonCommonData> = await res.json();
  return data;
};

export const getPokemonDetail = async (url: string): Promise<PokemonInfo> => {
  const res = await fetch(url);
  const data: PokemonInfo = await res.json();
  return data;
};
