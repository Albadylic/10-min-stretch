import React from "react";
import "./Card.css";
import stretches from "./stretches.json";

const Card = () => {
  const randomStretch = () => {
    const index = Math.floor(Math.random() * stretches.length);
    return stretches[index];
  };

  const stretch = randomStretch();

  return (
    <div className="Stretch">
      <h2>{stretch.name}</h2>
      <h3>Interval</h3>
      <p>{stretch.repetitions}</p>
      <br />
      <h3>Instructions</h3>
      <p>{stretch.instructions}</p>
      <br />
      <h3>Advanced option</h3>
      <p>{stretch.advanced}</p>
    </div>
  );
};

export default Card;
