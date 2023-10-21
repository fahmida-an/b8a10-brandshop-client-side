import { useLoaderData } from "react-router-dom";
import GucciProductCard from "./GucciProductCard";
import Slider from "../Sharedpages/Slider/Slider";

const GucciProduct = () => {
  const gucciProducts = useLoaderData();
  return (
    <div>
      <div>
        <Slider></Slider>
        <h1 className="py-10 text-center text-3xl font-rancho">
          All Gucci Products: {gucciProducts.length}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {gucciProducts.map((product) => (
            <GucciProductCard
              key={product._id}
              product={product}
            ></GucciProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GucciProduct;
