import { useState } from "react";
import swal from "sweetalert";


const MyCartCard = ({product, }) => {
    const {_id, name, brandname, type, price, image, rating, details} = product;
    const {dProducts, setProducts} = useState(product);

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
            fetch(`https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/cart/${_id}`, {
              method: "DELETE",
            })
    
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if(data.deletedCount > 0){
                swal("Poof! Your imaginary file has been deleted!", {
                  icon: "success",
                });
                const remaining = dProducts.filter(prod => prod._id ===_id);
                setProducts(remaining)
              }
            })
            
          } else {
            swal("Your imaginary file is safe!");
          }
        });
      }
    return (
        <div>
        
            <div className="card w-96 card-side bg-slate-100 shadow-xl mb-3 mx-auto">
        <figure>
          <img className="w-72 h-32" src={image} alt="Movie" />
        </figure>
        <div className="flex justify-between w-full pr-8 mr-8 ml-8">
          <div>
            <h2 className="card-title text-sm">{name}</h2>
            <p>{brandname}</p>
            <p>{type}</p>
            <p>{price}</p>
            <p>{rating}</p>
            <p>{details}</p>
          </div>
          <div className="card-actions justify-end">
            <button onClick={()=> handleDelete(_id)} className="btn">X</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default MyCartCard;