import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../../Pages/Home/Home";
import CreateProduct from "../../Pages/CreateProduct/CreateProduct";
import ProductLists from "../../Pages/ProductList/ProductLists";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import UpdateProduct from "../../Pages/UpdateProduct/UpdateProduct";
import Loading from "../../Components/Loading/Loading";
import Cart from "../../Pages/Cart/Cart";
import AllSales from "../../Pages/AllSales/AllSales";
import Login from "../../Components/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/create-product",
        element: <CreateProduct></CreateProduct>,
      },
      {
        path: "/products-list",
        element: <ProductLists></ProductLists>,
      },
      {
        path: "/all-products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/all-sales",
        element: <AllSales></AllSales>,
      },
      {
        path: "/update-product/:productId",
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/loading",
        element: <Loading></Loading>,
      },
    ],
  },
]);

export default router;
