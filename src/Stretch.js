import React from "react";
import "./Card.css";
import stretches from "./stretches.json";

const Card = () => {
  const randomStretch = () => {
    const index = Math.floor(Math.random() * stretches.length);
    return stretches[index];
  };

  console.log(randomStretch());

  const stretch = randomStretch();

  return (
    <div className="Stretch">
      <h2>{stretch.name}</h2>
      <p>{stretch.repetitions}</p>
      <p>{stretch.instructions}</p>
      <p>{stretch.advanced}</p>
    </div>
  );
};

export default Card;
