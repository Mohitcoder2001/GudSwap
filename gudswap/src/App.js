import React, { useState } from 'react';
import AnimalCard from './components/AnimalCard';
import ProgressBar from './components/ProgressBar';
import animalsData from './data/animals.json';
import './App.css';

const App = () => {
  const [counts, setCounts] = useState({});
  const [totalUnits, setTotalUnits] = useState(0);

  const handleAddAnimal = (id, unitValue) => {
    const newCounts = { ...counts, [id]: (counts[id] || 0) + 1 };
    setCounts(newCounts);
    setTotalUnits(totalUnits + unitValue);
  };

  const handleRemoveAnimal = (id, unitValue) => {
    if (counts[id] > 0) {
      const newCounts = { ...counts, [id]: counts[id] - 1 };
      setCounts(newCounts);
      setTotalUnits(totalUnits - unitValue);
    }
  };

  const handleReset = () => {
    setCounts({});
    setTotalUnits(0);
  };

  return (
    <div className="app">
      <h1>GudSwap Army</h1>
      <div className="progress-section">
        <div className="progress-container">
          <div className="labels">
            <span className={`label ${totalUnits > 0 ? 'active' : ''}`}>L0</span>
            <span className={`label ${totalUnits >= 5 ? 'active' : ''}`}>L1</span>
            <span className={`label ${totalUnits >= 10 ? 'active' : ''}`}>L2</span>
            <span className={`label ${totalUnits >= 15 ? 'active' : ''}`}>L3</span>
          </div>
          <ProgressBar value={(totalUnits / 15) * 100} />
        </div>
        <button
          className="reset-button"
          onClick={handleReset}
          disabled={totalUnits === 0}
        >
          RESET
        </button>
      </div>
      <div className="animal-cards">
        {animalsData.animals.map(animal => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            count={counts[animal.id] || 0}
            onAdd={() => handleAddAnimal(animal.id, animal.unitValue)}
            onRemove={() => handleRemoveAnimal(animal.id, animal.unitValue)}
          />
        ))}
      </div>
      <div className="total-units">
        Total Units = {totalUnits}
      </div>
    </div>
  );
};

export default App;
