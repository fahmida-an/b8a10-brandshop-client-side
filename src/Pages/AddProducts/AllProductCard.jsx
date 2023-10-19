const AllProductCard = ({ product }) => {
    const {_id, name, brandname, type, price, image, rating, details} = product;
    
  return (
    <div className="">
       <div className="card card-side bg-base-100 shadow-xl mb-3">
        <figure>
          <img className="w-72 h-32" src={image} alt="Movie" />
        </figure>
        <div className="flex justify-between w-full pr-8">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{brandname}</p>
            <p>{type}</p>
            <p>{price}</p>
            <p>{rating}</p>
            <p>{details}</p>
          </div>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;
