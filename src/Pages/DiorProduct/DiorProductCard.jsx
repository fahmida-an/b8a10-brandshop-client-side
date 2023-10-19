import React from "react";

const DiorProductCard = ({ product }) => {
  const { _id, name, brandname, type, price, image, rating, details } = product;
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Brand: {brandname}</h2>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Rating{rating}</p>
        
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default DiorProductCard;
