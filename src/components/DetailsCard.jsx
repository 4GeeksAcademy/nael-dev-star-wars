
import useGlobalReducer from "../hooks/useGlobalReducer"

export const DetailsCardPeople = ({ item, img }) => {
  return (
    <div className="detail-card">
      <div className="detail-card-img-container">
        <img src={img} alt={item.name} />
      </div>
      <div className="detail-card-body">
        <h1 className="detail-card-title">{item.name}</h1>
        <div className="detail-card-info">
          <h3>Height: {item.height}</h3>
          <h3>Mass: {item.mass}</h3>
          <h3>Hair Color: {item.hair_color}</h3>
          <h3>Eye Color: {item.eye_color}</h3>
          <h3>Birth year: {item.birth_year}</h3>
          <h3>Gender: {item.gender}</h3>
          <h3>Starships: {item.starships?.length || 0}</h3>
        </div>
      </div>
    </div>
  );
};
export const DetailsCardPlanet = ({ item, img }) => {
  return (
    <div className="detail-card">
      <div className="detail-card-img-container">
        <img src={img} alt={item.name} />
      </div>
      <div className="detail-card-body">
        <h1 className="detail-card-title">{item.name}</h1>
        <div className="detail-card-info">
          <h3>Rotation Period: {item.rotation_period}</h3>
          <h3>Orbital Period: {item.orbital_period}</h3>
          <h3>Diameter: {item.diameter}</h3>
          <h3>Climate: {item.climate}</h3>
          <h3>Gravity: {item.gravity}</h3>
          <h3>Terrain: {item.terrain}</h3>
          <h3>Surface Water: {item.surface_water}</h3>
          <h3>Population: {item.population}</h3>
        </div>
      </div>
    </div>
  );
};

export const DetailsStarship = ({ item, img }) => {
  return (
    <div className="detail-card">
      <div className="detail-card-img-container">
        <img src={img} alt={item.name} />
      </div>
      <div className="detail-card-body">
        <h1 className="detail-card-title">{item.name}</h1>
        <div className="detail-card-info">
          <h3>Manufacturer: {item.manufacturer}</h3>
          <h3>Cost: {item.cost_in_credits} credits</h3>
          <h3>Length: {item.length}m</h3>
          <h3>Max Speed: {item.max_atmosphering_speed}</h3>
          <h3>Crew: {item.crew}</h3>
          <h3>Passengers: {item.passengers}</h3>
          <h3>Cargo Capacity: {item.cargo_capacity}kg</h3>
          <h3>Consumables: {item.consumables}</h3>
          <h3>Hyperdrive Rating: {item.hyperdrive_rating}</h3>
          <h3>MGLT: {item.MGLT}</h3>
          <h3>Class: {item.starship_class}</h3>
        </div>
      </div>
    </div>
  );
};