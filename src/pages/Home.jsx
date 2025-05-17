import { useEffect, useState } from "react";
import { CardPeople, CardPlanets, CardStarships } from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [initialLoad, setInitialLoad] = useState(true);
  const [localData, setLocalData] = useState({
    characters: [],
    planets: [],
    starships: []
  })

  const divideFourCarousel =(array,size) =>{
    const result= [];
    for(let i=0 ;i<array.length; i += size){
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  useEffect(() => {
    const fetchData = async () => {
      



      if (localData.characters.length > 0 &&
        localData.planets.length > 0 &&
        localData.starships.length > 0
      ) {
        setLocalData({
          characters: store.characters,
          planets: store.planets,
          starships: store.starships
        });
        setInitialLoad(false);
        return;
      }

      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const [charactersRes, planetsRes, starshipsRes] = await Promise.all([
          fetch('https://www.swapi.tech/api/people'),
          fetch('https://www.swapi.tech/api/planets'),
          fetch('https://www.swapi.tech/api/starships')
        ]);

        const [charactersData, planetsData, starshipsData] = await Promise.all([
          charactersRes.json(),
          planetsRes.json(),
          starshipsRes.json()
        ]);

         const formatItems = (data) =>
          data.results.map((item) => ({
            uid: item.uid,   
            name: item.name
          }));
       const characters = formatItems(charactersData);
        const planets = formatItems(planetsData);
        const starships = formatItems(starshipsData);

        dispatch({
          type: 'SET_ALL_DATA',
          payload: { characters, planets, starships }
        });
        setLocalData({
          characters,
          planets,
          starships
        });

      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
        setInitialLoad(false);
      }
    };

   

    fetchData();
  }, []);

  const myTypeToApi = {
  character: "people",
  planet: "planets",
  starship: "starships"
};

  const handleAddFav = (item) => {
    const valorsApi = myTypeToApi[item.type]
    const isFavAlready = store.favorites.some(fav => fav.uid === item.id);
    if (!isFavAlready) {
      dispatch({
        type: 'SET_FAVORITES',
        payload: [...store.favorites,{...item, type: valorsApi}]
      });
    }
  };

  if (store.loading && initialLoad) return (
    <div className="text-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  );

  if (store.error) return <div className="alert alert-danger">Error: {store.error}</div>;

  const localDataUse = {
    characters: localData.characters.length > 0 ? localData.characters : store.characters,
    planets: localData.planets.length > 0 ? localData.planets : store.planets,
    starships: localData.starships.length > 0 ? localData.starships : store.starships
  }

   const characterStack = divideFourCarousel(localDataUse.characters, 4);
  const planetStack = divideFourCarousel(localDataUse.planets, 4);
  const starshipStack = divideFourCarousel(localDataUse.starships, 4);

  return (
    
     <div className="container mt-4">
   
      <h2 className="text-center mb-4">Personajes de Star Wars</h2>
      <Carousel id="charactersCarousel" stack={characterStack} CardComponent={CardPeople} type="character" handleAddFav={handleAddFav} favorites={store.favorites} />

    
      <h2 className="text-center mb-4">Planetas de Star Wars</h2>
      <Carousel id="planetsCarousel" stack={planetStack} CardComponent={CardPlanets} type="planet" handleAddFav={handleAddFav} favorites={store.favorites} />

   
      <h2 className="text-center mb-4">Naves de Star Wars</h2>
      <Carousel id="starshipsCarousel" stack={starshipStack} CardComponent={CardStarships} type="starship" handleAddFav={handleAddFav} favorites={store.favorites} />
    </div>
  );
};

const Carousel = ({ id, stack, CardComponent, type, handleAddFav, favorites }) => (
  <div id={id} className="carousel slide mb-5" data-bs-ride="carousel">
    <div className="carousel-inner">
      {stack.map((group, index) => (
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={`${id}-${index}`}>
          <div className="card-group">
            {group.map((item) => (
              <CardComponent
                key={item.uid}
                uid={item.uid}
                nameTitle={item.name}
                img={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${type}s/${item.uid}.jpg`}
                addFavorites={() => handleAddFav({ type, ...item })}
                isFavorite={favorites.some(fav => fav.name === item.name)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);