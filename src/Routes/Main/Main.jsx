import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../../Pages/Home/Home";
import CreateProduct from "../../Pages/CreateProduct/CreateProduct";
import ProductLists from "../../Pages/ProductList/ProductLists";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import UpdateProduct from "../../Pages/UpdateProduct/UpdateProduct";
import Loading from "../../Components/Loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        path: "/update-product/:productId",
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: "/loading",
        element: <Loading></Loading>,
      },
    ],
  },
]);

export default router;
