import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailsCardPeople, DetailsCardPlanet, DetailsStarship } from "../components/DetailsCard";

export const Detail = () => {
  const { type, uid } = useParams(); 
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`https://www.swapi.tech/api/${type}/${uid}`);
        const data = await res.json();
        const props = data.result.properties;
        setItem({
          datas : props
        });
      } catch (err) {
        setError("No se pudo cargar el detalle.");
     
        
      }
      setLoading(false);
    };

    fetchDetail();
  }, [type, uid]);

  const switchType = () =>{
    switch (type) {
      case 'people':
        return <DetailsCardPeople item={item.datas} type={type} />;
      case 'planets':
        return <DetailsCardPlanet item={item.datas} type={type} />
      case 'starships':
        return <DetailsStarship item={item.datas} type={type} />

      default:
        return <div>Tipo no identificado</div>


    }
  }

  if (loading) return <div>Cargando detalle...</div>;
  if (error) return <div>{error}</div>;
  if (!item) return <div>No se encontró el ítem.</div>;

  return (
    <div className="d-flex justify-content-center mt-4">
      {switchType()}
    </div>
  );
};  