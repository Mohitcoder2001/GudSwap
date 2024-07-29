import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';
import horseImg from '../images/horse.png';
import elephantImg from '../images/elephant.png';
import dragonImg from '../images/dragon.png';

const AnimalCard = ({ animal, count, onAdd, onRemove }) => {
  // Map animal names to imported images
  const images = {
    horse: horseImg,
    elephant: elephantImg,
    dragon: dragonImg
  };

  return (
    <div className="animal-card">
      <img src={images[animal.imageUrl]} alt={animal.name} />
      <h3>{animal.name} ({animal.unitValue} no = 1 unit)</h3>
      <div className="controls">
        <button onClick={onRemove} disabled={count === 0}>-</button>
        <span>{count}</span>
        <button onClick={onAdd}>+</button>
      </div>
    </div>
  );
};

AnimalCard.propTypes = {
  animal: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default AnimalCard;
