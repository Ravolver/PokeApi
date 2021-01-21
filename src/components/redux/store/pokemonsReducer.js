const SETPOKEMON = 'SET_POKEMON';
const RESETPOKEMON = 'RESET_POKEMON';
const SETSTATS = 'SET_STATS';
export const FETCHPOKEMON = 'FETCH_POKEMON';

const initialState = {
  pokemons: [],
  stats: [],
  disabledButton: false
}

export const pokemonsReducer = (state = initialState, action) => {
  switch(action.type){
    case SETPOKEMON:
      return {...state, pokemons: [...state.pokemons, action.payload], disabledButton: true }
    case RESETPOKEMON:
      return {...state, pokemons: [], stats: [], disabledButton: false}
    case SETSTATS:
      return {...state, stats: [...state.stats, action.payload]}
    default: return state;
  }
}

export const setPoke = (payload) => ({type: SETPOKEMON, payload});
export const resPoke = () => ({type: RESETPOKEMON});
export const setStats = (payload) => ({type: SETSTATS, payload});
export const fetchPoke = () => ({type:FETCHPOKEMON});


