
import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

const GucciProductCard = ({ product }) => {
  const { _id, name, brandname, type, price, image, rating, details } = product;

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    // const starClassName = i <= rating ? <FaStar></FaStar> : '';
    const isFilled = i <= rating;
    stars.push(
      <span key={i}>
        {isFilled ? <FaStar className="text-red-500" /> : <FaStar />}
      </span>
    );
  }
  return  (
   <div className="card w-72 bg-base-100 shadow-xl mx-auto mt-4">
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
    <p className="flex">Rating: {stars}</p>
    
    <div className="card-actions justify-end">
      <Link to={`/products/Gucci/${_id}`}>
      <button className="btn bg-gray-900 border-none text-white">See Details</button>
      </Link>
    </div>
  </div>
</div>
  )
};

export default GucciProductCard;
