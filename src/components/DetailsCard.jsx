
import useGlobalReducer from "../hooks/useGlobalReducer"


export const DetailsCard = ({item}) => {
    const {store} = useGlobalReducer();
   
    
    return (
        <div className="container">
        <div >
            <div >
                <h1>{item.name}</h1>
            </div>
            <div className="p-2">
                <p>{item.description}</p>
                
                <h2 >BIRTH YEAR</h2>
                <ul className="list-unstyled">
                    <li>{item.birth_year}</li>
                    
                </ul>
                
                <div className="row">
                    <div className="col-md-6">
                        <h2 >Affiliations</h2>
                        <ul>
                            <li>Rebel Alliance</li>
                            <li>Jedi Order</li>
                        </ul>
                        
                        <h2>Locations</h2>
                        <ul>
                            <li>Polis Massa</li>
                            <li>Lars Moisture Farm</li>
                            <li>Tatooine</li>
                        </ul>
                    </div>
                    
                    <div className="col-md-6">
                        <h2>Details</h2>
                        <ul className="list-unstyled">
                            <li><strong>Gender:</strong> Male</li>
                            <li><strong>Height:</strong> 1.72m</li>
                            <li><strong>Species:</strong> Human</li>
                        </ul>
                    </div>
                </div>
                
                <h2 >Vehicles</h2>
                <ul>
                    <li>T-16 Skyhopper</li>
                    <li>X-34 Landspeeder</li>
                    <li>X-wing Starfighter</li>
                    <li>Snowspeeder</li>
                </ul>
                
                <h2 >Weapons</h2>
                <ul>
                    <li>Lightsaber</li>
                    <li>Blaster Pistol</li>
                    <li>Luke Skywalker's Lightsaber (Green Blade)</li>
                    <li>Anakin, Luke, and Rey's Lightsaber</li>
                </ul>
                
                <h2>Tools</h2>
                <ul>
                    <li>Bacta Tank</li>
                    <li>Moisture Vaporator</li>
                </ul>
            </div>
        </div>
    </div>

    )
}