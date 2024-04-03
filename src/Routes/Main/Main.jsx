import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../../Pages/Home/Home";
import CreateProduct from "../../Pages/CreateProduct/CreateProduct";
import ProductLists from "../../Pages/ProductList/ProductLists";
import AllProducts from "../../Pages/AllProducts/AllProducts";

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
    ],
  },
]);

export default router;
