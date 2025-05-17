import { useEffect, useState } from "react";
import { CardPeople, CardPlanets, CardStarships } from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [initialLoad, setInitialLoad] = useState(true);
  const [localData, setLocalData] = useState({
    characters: [],
    planets:[],
    starships:[]
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      
      
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

      
       dispatch ({type:'SET_LOADING', payload: true});

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

        const [characters, planets, starships] = await Promise.all([
          fetchDetails(charactersData.results.slice(0, 6)),
          fetchDetails(planetsData.results.slice(0, 6)),
          fetchDetails(starshipsData.results.slice(0, 6))
        ]);

        dispatch({
          type: 'SET_ALL_DATA',
          payload: { characters, planets, starships }
        });
       
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
        setInitialLoad(false);
      }
    };

    const fetchDetails = async (items) => {
      return Promise.all(
        items.map(async (item) => {
          const res = await fetch(item.url);
          const data = await res.json();
          return {
            uid: data.result.uid,
            ...data.result.properties
          };
        })
      );
    };

    fetchData();
  }, []);

  const handleAddFav = (item) => {
    const isFavAlready = store.favorites.some(fav => fav.name === item.name);
    if (!isFavAlready) {
      dispatch({ 
        type: 'SET_FAVORITES', 
        payload: [...store.favorites, item] 
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

  return (
    <div>
      <section>
        <h2>Personajes de Star Wars</h2>
        <div className="card-group">
          {localDataUse.characters?.map((character) => (
            <CardPeople
              key={character.uid}
              nameTitle={character.name}
              gender={character.gender}
              hairColor={character.hair_color}
              eyesColor={character.eye_color}
              uid={character.uid}
              img={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
              addFavorites={() => handleAddFav({
                type: 'people',
                ...character
              })}
              isFavorite={store.favorites.some(fav => fav.name === character.name)}
            />
          ))}
        </div>
      </section>

      <section className="mt-4">
        <h2>Planetas de Star Wars</h2>
        <div className="card-group">
          {localDataUse.planets?.map((planet) => (
            <CardPlanets
              key={planet.uid}
              nameTitle={planet.name}
              population={planet.population}
              terrain={planet.terrain}
              uid={planet.uid}
              img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
              addFavorites={() => handleAddFav({
                type: 'planet',
                ...planet
              })}
              isFavorite={store.favorites.some(fav => fav.name === planet.name)}
            />
          ))}
        </div>
      </section>

      <section className="mt-4">
        <h2>Naves Estelares</h2>
        <div className="card-group">
          {localDataUse.starships?.map((ship) => (
            <CardStarships
              key={ship.uid}
              nameTitle={ship.name}
              model={ship.model}
              description={ship.starship_class}
              uid={ship.uid}
              img={`https://starwars-visualguide.com/assets/img/starships/${ship.uid}.jpg`}
              addFavorites={() => handleAddFav({
                type: 'starship',
                ...ship
              })}
              isFavorite={store.favorites.some(fav => fav.name === ship.name)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};