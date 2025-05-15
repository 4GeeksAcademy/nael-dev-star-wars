import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailsCard } from "../components/DetailsCard";

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
          uid,
          name: props.name,
          gender: props.gender,
          eyeColor: props.eye_color,
          hairColor: props.hair_color,
          population: props.population,
          terrain: props.terrain,
          model: props.model,
          decription: props.starship_class
        });
      } catch (err) {
        setError("No se pudo cargar el detalle.");
     
        
      }
      setLoading(false);
    };

    fetchDetail();
  }, [type, uid]);

  if (loading) return <div>Cargando detalle...</div>;
  if (error) return <div>{error}</div>;
  if (!item) return <div>No se encontró el ítem.</div>;

  return (
    <div className="container mt-4">
      <DetailsCard item={item} />
    </div>
  );
};