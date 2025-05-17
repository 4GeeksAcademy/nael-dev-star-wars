
import useGlobalReducer from "../hooks/useGlobalReducer"


export const DetailsCardPeople = ({ item,img }) => {

    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={img} alt="Card image cap"/>
                <div className="card-body">
                    <h1 className="card-title">{item.name}</h1>
                    <h3>Height:{item.height}</h3>
                    <h3>Mass:{item.mass}</h3>
                    <h3>Hair Color: {item.hair_color}</h3>
                    <h3>Eye Color: {item.eye_color}</h3>
                    <h3>Birth year: {item.birth_year}</h3>
                    <h3>Gender: {item.gender}</h3>
                    <h3>Naves: {item.starships}</h3>

                </div>
        </div>

    )
}

export const DetailsCardPlanet = ({ item,img }) => {

    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={img} alt="Card image cap"/>
                <div className="card-body">
                    <h1 className="card-title">{item.name}</h1>
                    <h3>Height:{item.rotation_period}</h3>
                    <h3>Mass:{item.orbital_period}</h3>
                    <h3>Hair Color: {item.diameter}</h3>
                    <h3>Eye Color: {item.climate}</h3>
                    <h3>Birth year: {item.gravity}</h3>
                    <h3>Gender: {item.terrain}</h3>
                    <h3>Naves: {item.surface_water}</h3>
                    <h3>Naves: {item.population}</h3>

                </div>
        </div>

    )
}

export const DetailsStarship = ({ item,img }) => {

    return (
        <div className="card">
            <img className="card-img-top" src={img} alt="Card image cap"/>
                <div className="card-body">
                    <h1 className="card-title">{item.name}</h1>
                    <h3>Height:{item.manufacturer}</h3>
                    <h3>Mass:{item.cost_in_credits}</h3>
                    <h3>Hair Color: {item.length}</h3>
                    <h3>Eye Color: {item.max_atmosphering_speed}</h3>
                    <h3>Birth year: {item.crew}</h3>
                    <h3>Gender: {item.passengers}</h3>
                    <h3>Naves: {item.cargo_capacity}</h3>
                    <h3>Naves: {item.consumables}</h3>
                    <h3>Naves: {item.hyperdrive_rating}</h3>
                    <h3>Naves: {item.MGLT}</h3>
                    <h3>Naves: {item.starship_class}</h3>
                    
                    

                </div>
        </div>

    )
}