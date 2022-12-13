import React from "react";

const Card = ({ data }) => {
  const { name, description, icon,bgClass } = data;
  return (
    <div className={`card card-side ${bgClass} p-4`}>
      <figure>
        <img src={icon} alt="Movie" className="w-16" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
