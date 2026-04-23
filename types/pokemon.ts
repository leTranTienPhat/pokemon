export interface PokemonSearchParams {
  page?: string;
  type?: string;
}

export interface PokemonCommonData {
  name: string;
  url: string;
}

export interface PokemonCommonDataByType {
  pokemon: {
    pokemon: PokemonCommonData;
    slot: number;
  }[];
}

export interface PokemonInfo {
  id: number;
  name: string;

  sprites: {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string;
    /** The shiny female depiction of this Pokémon from the front in battle */
    front_shiny_female: string;
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string;
    /** The female depiction of this Pokémon from the back in battle */
    back_female: string;
    /** The shiny female depiction of this Pokémon from the back in battle */
    back_shiny_female: string;

    // Type: https://github.com/PokeAPI/sprites#sprites
    other: {
      showdown: {
        front_default: string;
        front_shiny: string;
        front_female: string;
        front_shiny_female: string;
        back_default: string;
        back_shiny: string;
        back_female: string;
        back_shiny_female: string;
      };
    };
  };
}
