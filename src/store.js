export const initialStore = () => ({
  characters: [],
  planets: [],
  starships:[],
  favorites: [],
  loading: false,
  error: null
});

export default function storeReducer(store, action) {
  switch(action.type) {
    case 'SET_CHARACTERS':
      return {
        ...store,
        characters: action.payload,
        loading: false
      };

      case 'SET_PLANETS':
        return {
          ...store,
          planets :action.payload,
          loading: false
        }
        case 'SET_STARSHIPS':
        return {
          ...store,
          starships :action.payload,
          loading: false
        }

    case 'SET_LOADING':
      return {
        ...store,
        loading: action.payload
      };

    case 'SET_ERROR':
      return {
        ...store,
        error: action.payload,
        loading: false
      };
    
    case 'SET_FAVORITES':
      return{
        ...store,
       favorites : action.payload,
       loading: false
      }
        case 'SET_ALL_DATA':
      return {
        ...store,
        characters: action.payload.characters || [],
        planets: action.payload.planets || [],
        starships: action.payload.starships || [], 
        loading: false,
        error: null
      };
      

    default:
      return store; // 
}
}