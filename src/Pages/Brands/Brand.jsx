import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { image, brandname } = brand;

  return (
    <div className="mx-auto">
      <div className="">
        <Link to={`/products/${brandname}`}>
          <div className="card w-80 lg:w-72 shadow-xl hover:shadow-3xl bg-gray-200 mt-10 ">
            <figure>
              <img src={image} alt="nike" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-end">
                <button className="btn btn-block">{brandname}</button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Brand;
