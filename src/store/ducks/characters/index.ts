import { Reducer } from 'redux';
import { Favorites, CharacteresTypes } from './types';

const INITIAL_STATE: Favorites = {
  favorites: [],
};

const reducer: Reducer<Favorites> = (state = INITIAL_STATE, action: any) => {
  const { payload } = action;
  const { favorites } = state;

  switch (action.type) {
    case CharacteresTypes.SET_FAVORITE_CHARACTER:
      return { ...state, favorites: [...favorites, payload.character] };

    default:
      return state;
  }
};

export default reducer;
