import { useLoaderData } from "react-router-dom";
import DiorProductCard from "./DiorProductCard";

const DiorProduct = () => {
  const diorProducts = useLoaderData();
  console.log(diorProducts);
  return (
    <div>
      <div>
        <h1 className="py-10 text-center text-3xl font-rancho">
          All Dior Products: {diorProducts.length}
        </h1>
        <div className="grid grid-cols-3">
          {diorProducts.map((product) => (
            <DiorProductCard
              key={product._id}
              product={product}
            ></DiorProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiorProduct;
