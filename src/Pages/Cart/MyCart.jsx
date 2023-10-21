import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Logo from "../../Sharedpages/Header/Logo";
const MyCart = () => {
  const cartProduct = useLoaderData();
  const {user} = useContext(AuthContext);

  return (
    <div>
      <Logo></Logo>
        {user &&
              <div>
              <h1 className="py-10 text-center text-3xl font-rancho">
             
                {cartProduct.length > 0
                ?`Your Cart Item ; ${cartProduct.length}`
                :"No item in your cart"}
              </h1>
              {<div className="grid grid-cols-1 lg:grid-cols-2">
                {cartProduct.map((product) => (
                  <MyCartCard key={product._id} product={product}></MyCartCard>
                ))}
              </div>}
              </div>
        }
    </div>




  );
};

export default MyCart;
