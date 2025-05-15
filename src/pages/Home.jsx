import { useEffect, useState } from "react";
import { CardPeople, CardPlanets, CardStarships } from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {


  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {

    const fetchStarships = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const res = await fetch('https://www.swapi.tech/api/starships');
        const data = await res.json();
        const first6 = data.results.slice(0, 6);
        // obtener lista detalla de naves
        const starshipsData = await Promise.all(
          first6.map(async (star) => {
            const starRes = await fetch(star.url);
            const starData = await starRes.json();
             console.log('starData.result.uid:', starData.result.uid);  // << aquí
            return {
              uid:  starData.result.uid,
              name: starData.result.properties.name,
              model: starData.result.properties.model,
              decription: starData.result.properties.starship_class
            }
          })

        )
        dispatch({ type: 'SET_STARSHIPS', payload: starshipsData });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      }


    }
    const fetchCharacters = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });


      try {
        // Obtener lista básica
        const res = await fetch('https://www.swapi.tech/api/people');
        const data = await res.json();
        const first6 = data.results.slice(0, 6);

        // Obtener detalles de cada personaje
        const charactersData = await Promise.all(
          first6.map(async (char) => {
            const charRes = await fetch(char.url);
            const charData = await charRes.json();
            console.log('charData.result.uid:', charData.result.uid);  // << aquí
            return {
              uid: charData.result.uid,
              name: charData.result.properties.name,
              gender: charData.result.properties.gender,
              eyeColor: charData.result.properties.eye_color,
              hairColor: charData.result.properties.hair_color
            };
          })
        );
        dispatch({ type: 'SET_CHARACTERS', payload: charactersData });



      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      }

    };

    const fetchPlanets = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const respPlanets = await fetch('https://www.swapi.tech/api/planets');
        const dataPlanets = await respPlanets.json();
        const first6Planets = dataPlanets.results.slice(0, 6);


        //Obtener detalle de los planetas 
        const planetsData = await Promise.all(
          first6Planets.map(async (char) => {
            const plaRes = await fetch(char.url);
            const planData = await plaRes.json();
             console.log('planData.result.uid:', planData.result.uid);  // << aquí
            return {
              uid: planData.result.uid,
              name: planData.result.properties.name,
              population: planData.result.properties.population,
              terrain: planData.result.properties.terrain
            }
          })
        )



        dispatch({ type: 'SET_PLANETS', payload: planetsData });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      }
      dispatch({ type: 'SET_LOADING', payload: false });
    }
    Promise.all([fetchCharacters(), fetchPlanets(), fetchStarships()])
      .finally(() => {
        dispatch({ type: 'SET_LOADING', payload: false });
      });
  }, []);

  const handleAddFav = (item) => {
    const isFavAlredy = store.favorites.some(fav => fav.name === item.name);
    if (!isFavAlredy) {
      const newFav = [...store.favorites, item]
      dispatch({ type: 'SET_FAVORITES', payload: newFav })
    }
  }


  if (store.loading) return <div>Cargando...</div>;
  if (store.error) return <div>Error: {store.error}</div>;
  console.log('Store characters:', store.characters);

  return (
    <div>
      <h2> Personajes de Star Wars</h2>
      <div className="card-group">
        {store.characters.map((character, index) => (
          <CardPeople key={index}
            nameTitle={character.name}
            gender={character.gender}
            hairColor={character.hairColor}
            eyesColor={character.eyeColor}
            uid={character.uid}
            img={"https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/1.jpg"}
            addFavorites={() => handleAddFav({
              type: 'people',
              ...character
            })}
            isFavorite={store.favorites.some(fav => fav.name === character.name)}
          />

        ))}
      </div>
      <div>
        <h2> Planetas de Star Wars</h2>
        <div className="card-group">
          {store.planets.map((planet, index) => (
            <CardPlanets
               key={index}
              nameTitle={planet.name}
              population={planet.population}
              terrain={planet.terrain}
              uid={planet.uid}
              img={"https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/10.jpg"}
              addFavorites={() => handleAddFav({
                type: 'planet',
                ...planet
              })}
              isFavorite={store.favorites.some(fav => fav.name === planet.name)}
            />



          ))}
        </div>
      </div>
      <div>
        <h2> Planetas de Star Wars</h2>
        <div className="card-group">
          {store.starShips.map((nave, index) => (
            <CardStarships key={index}
              nameTitle={nave.name}
              model={nave.model}
              description={nave.decription}
              uid={nave.uid}
              img={"https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/10.jpg"}
              addFavorites={() => handleAddFav({
                type: 'starship',
                ...nave
              })}
              isFavorite={store.favorites.some(fav => fav.name === nave.name)}
            />



          ))}
        </div>
      </div>
    </div>
  );
};
