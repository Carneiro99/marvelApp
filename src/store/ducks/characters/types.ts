export enum CharacteresTypes {
  SET_FAVORITE_CHARACTER = '@characteres/SET_FAVORITE_CHARACTER',
  DELETE_FAVORITE_CHARACTER = '@characteres/DELETE_FAVORITE_CHARACTER',
}

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  favorite: boolean;
}

export interface Favorites {
  readonly favorites: Array<unknown>;
}
export interface CharacteresState {
  readonly data: Character[];
  readonly loading: boolean;
  readonly error: boolean;
  readonly filter: string;
}
