import { useLoaderData, useParams } from "react-router-dom";

const DiorDetails = () => {
  const diorProducts = useLoaderData();
  const { _id, name, brandname, type, price, image, rating, details } =
    diorProducts;

  return (
    <div>
        <h2 className="py-8 font-bold font-rancho text-3xl text-center">{type} Details</h2>
      <div className="card max-w-2xl mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="py-4"
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Brand: {brandname}</p>
          <p>Type: {type}</p>
          <div>
          <p className="btn">Price: ${price}</p>
          <p className="btn">Rating: {rating}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn">Update</button>
            <button className="btn">DELETE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiorDetails;
