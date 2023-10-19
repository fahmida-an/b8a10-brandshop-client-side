import { useLoaderData } from "react-router-dom";
import AllProductCard from "./AllProductCard";

const AllProducts = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <h1 className="py-10 text-center text-3xl font-rancho">All Added Products: {products.length}</h1>
          <div className="grid grid-cols-2">
          {
                products.map(product => <AllProductCard key={product._id} product={product}></AllProductCard>)
            }
          </div>
        </div>
    );
};

export default AllProducts;