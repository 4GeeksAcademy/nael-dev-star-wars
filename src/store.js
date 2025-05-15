export const initialStore = () => ({
  characters: [],
  planets: [],
  starShips:[],
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
          starShips :action.payload,
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
      

    default:
      return store; // 
}
}