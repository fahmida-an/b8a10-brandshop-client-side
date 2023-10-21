import { useLoaderData } from "react-router-dom";
import AddidasProductCard from "./AddidasProductCard";
import Slider from "../../Sharedpages/Slider/Slider";

const AddidasProduct = () => {
  const addidasProduct = useLoaderData();
  console.log(addidasProduct);
  return (
    <div>
      <div>
        <Slider></Slider>
        <h1 className="py-10 text-center text-3xl font-rancho">
          Addidas Product: {addidasProduct.length}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {addidasProduct.map((product) => (
            <AddidasProductCard
              key={product._id}
              product={product}
            ></AddidasProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddidasProduct;
