import { useLoaderData } from "react-router-dom";
import DiorProductCard from "./DiorProductCard";
import Slider from "../../Sharedpages/Slider/Slider";

const DiorProduct = () => {
  const diorProducts = useLoaderData();
  // console.log(diorProducts);
  return (
    <div className="">
      <Slider></Slider>
      <div className="">
        <h1 className="py-10 text-center text-3xl font-rancho">
          All Dior Products: {diorProducts.length}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto">
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
