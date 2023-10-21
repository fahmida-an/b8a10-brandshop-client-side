
import { useLoaderData } from "react-router-dom";
import NikeProductCard from "./NikeProductCard";
import Slider from "../../Sharedpages/Slider/Slider";
const NikeProduct = () => {
  const nikeProduct = useLoaderData();
  
  return (
    <div>
      <Slider></Slider>
      <div>
    
        <h1 className="py-10 text-center text-3xl font-rancho">
          All Nike Product: {nikeProduct.length}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {nikeProduct.map((product) => (
            <NikeProductCard
              key={product._id}
              product={product}
            ></NikeProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NikeProduct;
