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
import PrivateRoute from "./PrivateRoute";
import UpdateDiorProduct from "../Pages/DiorProduct/UpdateDiorProduct";
import AddidasDetails from "../Pages/AddidasProduct/AddidasDetails";
import UpdateAddidasProduct from "../Pages/AddidasProduct/UpdateAddidasProduct";
import NikeDetails from "../Pages/NikeProduct/NikeDetails";
import UpdateNikeProduct from "../Pages/NikeProduct/UpdateNikeProduct";
import Cart from "../Pages/Cart/Cart";
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
          element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
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
          
        },
        {
          path: "/products/Dior/update/:id",
          element: <UpdateDiorProduct></UpdateDiorProduct>,
          loader: ({params}) => fetch(`http://localhost:4000/products/Dior/${params.id}`)
        },
        {
          path: "/products/Addidas/:id",
          element: <AddidasDetails></AddidasDetails>,
          loader: ({params}) => fetch(`http://localhost:4000/products/Addidas/${params.id}`)
        },
        {
          path: "/products/Addidas/update/:id",
          element: <UpdateAddidasProduct></UpdateAddidasProduct>,
          loader: ({params}) => fetch(`http://localhost:4000/products/Addidas/${params.id}`)
        },

        {
          path: "/products/Nike/:id",
          element:<NikeDetails></NikeDetails> ,
          loader: ({params}) => fetch(`http://localhost:4000/products/Nike/${params.id}`)
        },
        {
          path: "/products/Nike/update/:id",
          element: <UpdateNikeProduct></UpdateNikeProduct>,
          loader: ({params}) => fetch(`http://localhost:4000/products/Nike/${params.id}`)
        },
        
        {
          path: "/products/:brandname/addtocart/:id",
          element: <Cart></Cart>,
          loader: ({params}) => fetch(`http://localhost:4000/products/:brandname/${params.id}`)
        }
      ]
    },
  ]);


 export default router;