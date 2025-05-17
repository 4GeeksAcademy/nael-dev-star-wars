import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

const SearchBar = () => {
  const [state, setState] = useState('');
  const [auto, setAuto] = useState([]);
  const navigate = useNavigate();
  const {store} =useGlobalReducer();

  useEffect(() => {
    if (!state) {
      setAuto([]);
      return;
    }

    const minusState = state.toLowerCase();

    const resultsCharacters = store.characters.filter((char) =>
      char.name.toLowerCase().includes(minusState)
    ).map(item => ({ ...item, type: 'people' }));

    const resultsPlanets = store.planets.filter((plan) =>
      plan.name.toLowerCase().includes(minusState)
    ).map(item => ({ ...item, type: 'planets' }));

    const resultsStarships = store.starships.filter((ship) =>
      ship.name.toLowerCase().includes(minusState)
    ).map(item => ({ ...item, type: 'starships' }));

   
    const combined = [...resultsCharacters, ...resultsPlanets, ...resultsStarships].slice(0, 10);

    setAuto(combined);
  }, [state, store.characters, store.planets, store.starships]);

  const handleSelect = (item) => {
    setState('');
    setAuto([]);
    navigate(`/detail/${item.type}/${item.uid}`);
  };

  return (
    <div className="position-relative" style={{ width: 250 }}>
      <input
        type="search"
        className="form-control"
        placeholder="Buscar personajes, planetas o naves..."
        value={state}
        onChange={(evt) => setState(evt.target.value)}
      />

      {auto.length > 0 && (
        <ul className="list-group position-absolute w-100" style={{ zIndex: 1000 }}>
          {auto.map((item) => (
            <li
              key={`${item.type}-${item.uid}`}
              className="list-group-item list-group-item-action"
              style={{ cursor: 'pointer' }}
              onClick={() => handleSelect(item)}
            >
              <strong>{item.name}</strong> <small className="text-muted">({item.type})</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;