
import "../index.css"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

export const CardPeople =({nameTitle, gender,hairColor,eyesColor,img,addFavourites, isFavorite})=>{
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{nameTitle}</h3>
                <h5 className="card-text">Genero: {gender}</h5>
                <h5 className="card-text">Color de Pelo: {hairColor}</h5>
                <h5 className="card-text">Color de ojos: {eyesColor}</h5>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <button
                        className="btn boton p-1 mx-1 "
                        type="button"
                        onClick={addFavourites}>
                       {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
                </button>
            </div>
        </div>
    )
}
export const CardPlanets =({nameTitle,population,terrain ,img,addFavourites,isFavorite})=>{
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{nameTitle}</h3>
                <h5 className="card-text">Population: {population}</h5>
                <h5 className="card-text">Terrain: {terrain}</h5>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <button
                        className="btn boton p-1 mx-1 "
                        type="button"
                        onClick={addFavourites}>
                        {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
                </button>
            </div>
        </div>
    )
}
export const CardStarships =({nameTitle,model,description,img,addFavourites, isFavorite})=>{
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{nameTitle}</h3>
                <h5 className="card-text">model: {model}</h5>
                <h5 className="card-text">description: {description}</h5>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <button
                        className="btn boton p-1 mx-1 "
                        type="button"
                        onClick={addFavourites}>
                        {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
                </button>
            </div>
        </div>
    )
}


