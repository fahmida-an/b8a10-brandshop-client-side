import { Link } from "react-router-dom";

const LvProductCard = ({product}) => {
    const { _id, name, brandname, type, price, image, rating, details } = product;
    return (
        <div>
            <div className="max-w-4xl mx-auto">
            <div className="card w-72 bg-base-100 shadow-xl mt-3">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Brand: {brandname}</h2>
          <p>Name: {name}</p>
          <p>Type: {type}</p>
          <p>Rating{rating}</p>

          <div className="card-actions justify-end">
          <Link to={`/products/LouisVuitton/${_id}`}>
          <button className="btn btn-primary">See Details</button>
          </Link>
          </div>
        </div>
      </div>
        </div>
        </div>
    );
};

export default LvProductCard;