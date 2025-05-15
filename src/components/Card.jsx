
import { Link } from "react-router-dom";
import "../index.css"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

export const CardPeople =({uid,nameTitle, gender,hairColor,eyesColor,img,addFavorites, isFavorite})=>{
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{nameTitle}</h3>
                <h5 className="card-text">Genero: {gender}</h5>
                <h5 className="card-text">Color de Pelo: {hairColor}</h5>
                <h5 className="card-text">Color de ojos: {eyesColor}</h5>
                <Link to={`/detail/people/${uid}`} className="btn btn-primary">
                    Learn more!
                </Link>
          
                <button
                        className="btn boton p-1 mx-1 "
                        type="button"
                        onClick={addFavorites}>
                       {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
                </button>
            </div>
        </div>
    )
}
export const CardPlanets =({uid,nameTitle,population,terrain ,img,addFavorites,isFavorite})=>{
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{nameTitle}</h3>
                <h5 className="card-text">Population: {population}</h5>
                <h5 className="card-text">Terrain: {terrain}</h5>
                <Link to={`/detail/planets/${uid}`} className="btn btn-primary">
                    Learn more!
                </Link>
                <button
                        className="btn boton p-1 mx-1 "
                        type="button"
                        onClick={addFavorites}>
                        {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
                </button>
            </div>
        </div>
    )
}
export const CardStarships =({uid,nameTitle,model,description,img,addFavorites, isFavorite})=>{
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{nameTitle}</h3>
                <h5 className="card-text">model: {model}</h5>
                <h5 className="card-text">description: {description}</h5>
                <Link to={`/detail/starships/${uid}`} className="btn btn-primary">
                    Learn more!
                </Link>
                <button
                        className="btn boton p-1 mx-1 "
                        type="button"
                        onClick={addFavorites}>
                        {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
                </button>
            </div>
        </div>
    )
}


