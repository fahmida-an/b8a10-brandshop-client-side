import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import swal from "sweetalert";

const DiorProductCard = ({ product, dProducts, setDproducts }) => {
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



  const handleDelete = _id => {
    console.log(_id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:4000/products/Dior/${_id}`, {
          method: "DELETE",
        })

        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount > 0){
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
            const remaining = dProducts.filter(cof => cof._id ===_id);
            setDproducts(remaining)
          }
        })
        
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }

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
        <p className="flex">Rating: {stars}</p>
        
        <div className="card-actions justify-end">
          <Link to={`/products/Dior/${_id}`}>
          <button className="btn btn-primary">See Details</button>
          </Link>
          <button onClick={()=> handleDelete(_id)} className="btn">DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default DiorProductCard;
