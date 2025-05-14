import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Navbar = () => {
	 const { store } = useGlobalReducer();
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHKcO1FmNwlCNBID69r_GiNk42bckfYOXYUg&s" alt="Bootstrap" width="100" height="100"></img>
				</Link>
				<div className="ml-auto">
					<div class="dropdown">
						<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos
						</button>
						<ul class="dropdown-menu">

							{
								store.favourites.map((fav,index)=>(
								<li key={index}><a class="dropdown-item" href="#">{fav}</a></li>
								

								))	
							}
							
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};