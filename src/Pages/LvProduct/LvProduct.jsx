import { useLoaderData } from "react-router-dom";
import LvProductCard from "./LvProductCard";

const LvProduct = () => {
  const lvProducts = useLoaderData();
  return (
    <div>
      
      <h1 className="py-10 text-center text-3xl font-rancho">
        {lvProducts.length > 0
          ? `All LuisVouitton Products: ${lvProducts.length}`
          : "No LuisVuitton Products available"}
      </h1>
      {lvProducts.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {lvProducts.map((product) => (
            <LvProductCard key={product._id} product={product}></LvProductCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default LvProduct;
