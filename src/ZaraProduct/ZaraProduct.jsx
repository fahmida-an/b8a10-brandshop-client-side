import { useLoaderData } from "react-router-dom";
import ZaraProductCard from "./ZaraProductCard";
import Slider from "../Sharedpages/Slider/Slider";

const ZaraProduct = () => {
    const zaraProduct = useLoaderData();
    return (
        <div>
            <div>
            <Slider></Slider>
        <h1 className="py-10 text-center text-3xl font-rancho">
          All Zara Product: {zaraProduct.length}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {zaraProduct.map((product) => (
            <ZaraProductCard
              key={product._id}
              product={product}
            ></ZaraProductCard>
          ))}
        </div>
      </div>
        </div>
    );
};

export default ZaraProduct;