import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root"
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProducts from "../Pages/AddProducts/AddProducts";
import AllProducts from "../Pages/AddProducts/AllProducts";
import DiorProduct from "../Pages/DiorProduct/diorProduct";
import AddidasProduct from "../Pages/AddidasProduct/AddidasProduct";
import NikeProduct from "../Pages/NikeProduct/NikeProduct";
import DiorDetails from "../Pages/DiorProduct/DiorDetails";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/brand.json')
        },
        {
           path: "/login",
           element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/addProduct",
          element: <AddProducts></AddProducts>
        },
        {
          path: "/allProduct",
          element: <AllProducts></AllProducts>,
          loader: () => fetch('http://localhost:4000/products')
        },
        {
          path: "/products/Dior",
          element:<DiorProduct></DiorProduct>,
          loader: () => fetch('http://localhost:4000/products/Dior')
        },
        {
          path: "/products/Addidas",
          element:<AddidasProduct></AddidasProduct>,
          loader: () => fetch('http://localhost:4000/products/Addidas')
        },
        {
          path: "/products/Nike",
          element:<NikeProduct></NikeProduct>,
          loader: () => fetch('http://localhost:4000/products/Nike')
        },

        {
          path: "/products/Dior/:id",
          element: <DiorDetails></DiorDetails>,
          loader: ({params}) => fetch(`http://localhost:4000/products/Dior/${params.id}`)
          
        }
      ]
    },
  ]);


 export default router;