import { useLoaderData } from "react-router-dom";
import AddidasProductCard from "./AddidasProductCard";

const AddidasProduct = () => {
  const addidasProduct = useLoaderData();
  console.log(addidasProduct);
  return (
    <div>
      <div>
        <h1 className="py-10 text-center text-3xl font-rancho">
          Addidas Product: {addidasProduct.length}
        </h1>
        <div className="grid grid-cols-3">
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
