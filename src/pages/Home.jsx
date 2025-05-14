import { useEffect, useState } from "react";
import {  CardPeople, CardPlanets, CardStarships } from "../components/Card.jsx";
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
          return {
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
            return {
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
            return {
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

const handleAddFav =(item)=>{
  const isFavAlredy = store.favourites.some(fav=>fav.name === item.name);
  if(!isFavAlredy){
    const newFav = [...store.favourites, item]
    dispatch({type:'SET_FAVOURITES', payload:newFav})
  }
}


  if (store.loading) return <div>Cargando...</div>;
  if (store.error) return <div>Error: {store.error}</div>;

  return (
    <div>
      <h2>6 Personajes de Star Wars</h2>
      <div  className="card-group">
        {store.characters.map((character, index) => (
          <CardPeople key={index}
            nameTitle={character.name}
            gender={character.gender}
            hairColor={character.eyeColor}
            eyesColor={character.hairColor}
            img={"https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/1.jpg"}
            addFavourites={()=>handleAddFav({
              type: 'people',
              ...character
            })}
              isFavorite={store.favourites.some(fav => fav.id === character.id)}
            />

        ))}
      </div>

     <div className="card-group">
        {store.planets.map((planet, index) => (
          <CardPlanets key={index}
              nameTitle={planet.name}
              population={planet.population}
              terrain={planet.terrain}
              img={"https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/10.jpg"}
              addFavourites={()=>handleAddFav({
                typle: 'planet',
                ...planet
              })}
              isFavorite={store.favourites.some(fav => fav.id === planet.id)}
          />
           

          
        ))}
     </div>

      <div className="card-group">
        {store.starShips.map((nave, index) => (
          <CardStarships key={index}
              nameTitle={nave.name}
              model={nave.model}
              description={nave.decription}
              img={"https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/10.jpg"}
              addFavourites={()=>handleAddFav({
                type: 'starship',
                ...nave
              })}
               isFavorite={store.favourites.some(fav => fav.id === nave.id)}
              />
           

    
        ))}
      </div>
    </div>
  );
};
