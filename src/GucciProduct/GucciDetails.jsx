import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Slider from "../Sharedpages/Slider/Slider";

const GucciDetails = () => {
  const gucciProducts = useLoaderData();
  const { _id, name, brandname, type, price, image, rating, details } =
    gucciProducts;
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
  return (
    <div>
     
      <div>
      <Slider></Slider>
        <h2 className="py-8 font-bold font-rancho text-3xl text-center">
          {type} Details
        </h2>
        <div className="card max-w-2xl mx-auto bg-base-100 shadow-xl">
          <figure>
            <img className="py-4" src={image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name: {name}</h2>
            <p>Brand: {brandname}</p>
            <p>Type: {type}</p>
            <p>{details}</p>
            <div>
              <p className="btn">Price: ${price}</p>
              <p className="btn">Rating: {stars}</p>
            </div>

            <div className="card-actions">
              <Link to={`/products/:brandname/addtocart/${_id}`}>
                <button className="btn">Add to Cart</button>
              </Link>
              <Link to={`/products/Gucci/update/${_id}`}>
                <button className="btn">Update</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GucciDetails;
