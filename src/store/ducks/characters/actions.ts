import { CharacteresTypes, Character } from './types';

export const setFavoriteCharacter = (character: any) => ({
  type: CharacteresTypes.SET_FAVORITE_CHARACTER,
  payload: {
    character,
  },
});

export const deleteFavoriteCharacter = (character: any) => ({
  type: CharacteresTypes.DELETE_FAVORITE_CHARACTER,
  payload: {
    character,
  },
});
