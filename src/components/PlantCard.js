import React from "react";

function PlantCard({ plant }) {
  const { name, image, price, inStock } = plant;

  return (
    <li className="card" data-testid="plant-item">
      <img src={image || "https://via.placeholder.com/400"} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price.toFixed(2)}</p>
      {inStock ? (
        <button className="primary">Out of stock</button>
      ) : (
        <button className="primary">In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;