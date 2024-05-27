import React from "react";

const Card = ({ title, children }) => (
  <div className="card p-2 my-2">
    <div className="pb-1">
      <h1 className="card-heading card-heading-color">{title}</h1>
    </div>
    {children}
  </div>
);

export default Card;



