
import { Link } from "react-router-dom";
import "../index.css"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

export const CardPeople =({uid,nameTitle,img,addFavorites, isFavorite})=>{
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{nameTitle}</h3>
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
export const CardPlanets =({uid,nameTitle ,img,addFavorites,isFavorite})=>{
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{nameTitle}</h3>
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
export const CardStarships =({uid,nameTitle,img,addFavorites, isFavorite})=>{
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{nameTitle}</h3>
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


