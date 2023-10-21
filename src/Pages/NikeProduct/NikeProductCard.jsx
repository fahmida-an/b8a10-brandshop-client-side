import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
const NikeProductCard = ({product}) => {
    const { _id, name, brandname, type, price, image, rating, details } = product;

    const stars = [];
    for(let i = 1; i<=5; i++){
      // const starClassName = i <= rating ? <FaStar></FaStar> : '';
      const isFilled = i <= rating;
      stars.push(
        <span key={i}>
        {isFilled ? <FaStar className="text-red-500" /> : <FaStar />}
      </span>
      );
    }
    return (
        <div className="max-w-4xl mx-auto">
            <div className="card w-72 bg-gray-200 shadow-xl mt-3">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Brand: {brandname}</h2>
          <p>Name: {name}</p>
          <p>Type: {type}</p>
          <p className="flex items-center">Rating: {stars}</p>

          <div className="card-actions justify-end">
          <Link to={`/products/Nike/${_id}`}>
          <button className="btn bg-gray-900 text-white">See Details</button>
          </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default NikeProductCard;