
import { useLoaderData } from "react-router-dom";
import NikeProductCard from "./NikeProductCard";

const NikeProduct = () => {
  const nikeProduct = useLoaderData();
  console.log(nikeProduct);
  return (
    <div>
      <div>
        <h1 className="py-10 text-center text-3xl font-rancho">
          Addidas Product: {nikeProduct.length}
        </h1>
        <div className="grid grid-cols-3">
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
