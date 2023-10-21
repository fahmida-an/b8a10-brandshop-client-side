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
import GucciDetails from "../GucciProduct/GucciDetails";
import UpdateGucciProduct from "../GucciProduct/UpdateGucciProduct";
import GucciProduct from "../GucciProduct/GucciProduct";
import ZaraDetails from "../ZaraProduct/ZaraDetails";
import UpdateZaraProduct from "../ZaraProduct/UpdateZaraProduct";
import LvProduct from "../Pages/LvProduct/LvProduct";
import LvDetails from "../Pages/LvProduct/LvDetails";
import UpdateLvProduct from "../Pages/LvProduct/UpdateLvProduct";
import MyCart from "../Pages/Cart/MyCart";
import ZaraProduct from "../ZaraProduct/ZaraProduct";
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
          loader: () => fetch('https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products')
        },
        {
          path: "/products/Dior",
          element:<DiorProduct></DiorProduct>,
          loader: () => fetch('https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/Dior')
        },
        {
          path: "/products/Addidas",
          element:<AddidasProduct></AddidasProduct>,
          loader: () => fetch('https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/Addidas')
        },
        {
          path: "/products/Nike",
          element:<NikeProduct></NikeProduct>,
          loader: () => fetch('https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/Nike')
        },

        {
          path: "/products/Gucci",
          element:<GucciProduct></GucciProduct>,
          loader: () => fetch('https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/Gucci')
        },
        {
          path: "/products/Zara",
          element:<ZaraProduct></ZaraProduct>,
          loader: () => fetch('https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/Zara')
        },
        {
          path: "/products/LouisVuitton",
          element:<LvProduct></LvProduct>,
          loader: () => fetch('https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/LouisVuitton')
        },

        {
          path: "/products/Dior/:id",
          element: <PrivateRoute><DiorDetails></DiorDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/Dior/${params.id}`)
          
        },
        {
          path: "/products/Dior/update/:id",
          element: <PrivateRoute><UpdateDiorProduct></UpdateDiorProduct></PrivateRoute>,
          loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/Dior/${params.id}`)
        },
        {
          path: "/products/Addidas/:id",
          element: <PrivateRoute><AddidasDetails></AddidasDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/Addidas/${params.id}`)
        },
        {
          path: "/products/Addidas/update/:id",
          element: <PrivateRoute><UpdateAddidasProduct></UpdateAddidasProduct></PrivateRoute>,
          loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/Addidas/${params.id}`)
        },

        {
          path: "/products/Nike/:id",
          element:<PrivateRoute><NikeDetails></NikeDetails></PrivateRoute> ,
          loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/Nike/${params.id}`)
        },
        {
          path: "/products/Nike/update/:id",
          element: <PrivateRoute><UpdateNikeProduct></UpdateNikeProduct></PrivateRoute>,
          loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/Nike/${params.id}`)
        },

        {
          path: "/products/Gucci/:id",
          element:<PrivateRoute><GucciDetails></GucciDetails></PrivateRoute> ,
          loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/Gucci/${params.id}`)
        },
        {
          path: "/products/Gucci/update/:id",
          element:<PrivateRoute> <UpdateGucciProduct></UpdateGucciProduct></PrivateRoute>,
          loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/Gucci/${params.id}`)
        },

        {
          path: "/products/Zara/:id",
          element:<PrivateRoute><ZaraDetails></ZaraDetails></PrivateRoute> ,
          loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/Zara/${params.id}`)
        },
        {
          path: "/products/Zara/update/:id",
          element: <PrivateRoute><UpdateZaraProduct></UpdateZaraProduct></PrivateRoute>,
          loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/Zara/${params.id}`)
        },

        {
          path: "/products/LouisVuitton/:id",
          element:<PrivateRoute><LvDetails></LvDetails></PrivateRoute> ,
          loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/LouisVuitton/${params.id}`)
        },
        {
          path: "/products/LouisVuitton/update/:id",
          element: <PrivateRoute><UpdateLvProduct></UpdateLvProduct></PrivateRoute>,
          loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/LouisVuitton/${params.id}`)
        },

        
        {
          path: "/products/:brandname/addtocart/:id",
          element: <PrivateRoute><Cart></Cart></PrivateRoute>,
          loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/products/:brandname/${params.id}`)
        },

        {
          path: "/mycart",
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
          loader: () => fetch('https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/cart')
        },
      ]
    },
  ]);


 export default router;