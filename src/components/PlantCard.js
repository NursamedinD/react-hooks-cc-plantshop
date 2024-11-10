import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlant }) {
  const [soldOut, setSoldOut] = useState(plant.soldOut || false);

  function handleSoldOutClick() {
    setSoldOut(!soldOut);
    const updatedPlant = { ...plant, soldOut: !soldOut };
    onUpdatePlant(updatedPlant);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className="primary" onClick={handleSoldOutClick}>
        {soldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;