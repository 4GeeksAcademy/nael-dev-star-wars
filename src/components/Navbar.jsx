import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { RiDeleteBin6Line } from "react-icons/ri";


export const Navbar = () => {
	const { store,dispatch } = useGlobalReducer();
	const counter = store.favorites.length;

const removeFav = (name)=>{
	dispatch({
		type: 'SET_FAVORITES',
		payload: store.favorites.filter(fav=>fav.name !== name)
	})
}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHKcO1FmNwlCNBID69r_GiNk42bckfYOXYUg&s" alt="Bootstrap" width="100" height="100" />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos <span className=" badge bg-info text-dark ms-2">{counter}</span>
						</button>

						<ul className="dropdown-menu">

							{
								store.favorites.map((fav, index) => (
									<li key={index}>
										<a className="dropdown-item" href="#">{fav.name}</a>
										<button
											className="btn boton p-1 mx-1 "
											type="button"
											onClick={()=>removeFav(fav.name)}
										>
											<RiDeleteBin6Line />
										</button>
									</li>


								))
							}

						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};