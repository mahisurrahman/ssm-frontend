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
import Receipts from "../../Pages/Receipts/Receipts";
import PrivateRoute from "../../Routes/privateRoute/privateRoute";
import DailySalesReport from "../../Pages/DailySalesReport/DailySalesReport";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <PrivateRoute><Home></Home></PrivateRoute>
      },
      {
        path: "/create-product",
        element: <PrivateRoute><CreateProduct></CreateProduct></PrivateRoute>,
      },
      {
        path: "/products-list",
        element: <PrivateRoute><ProductLists></ProductLists></PrivateRoute>,
      },
      {
        path: "/all-products",
        element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute>,
      },
      {
        path: "/all-sales",
        element: <PrivateRoute><AllSales></AllSales></PrivateRoute>,
      },
      {
        path: "/update-product/:productId",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
      },
      {
        path: "/loading",
        element: <Loading></Loading>,
      },
      {
        path: "/receipts",
        element: <PrivateRoute><Receipts></Receipts></PrivateRoute>,
      },
      {
        path: "/dailySales",
        element: <PrivateRoute><DailySalesReport></DailySalesReport></PrivateRoute>
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>
  }
]);

export default router;
