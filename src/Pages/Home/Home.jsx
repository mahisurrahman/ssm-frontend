import { Helmet } from "react-helmet";
import TotalOrders from "../../Components/HomeComponents/TotalOrders/TotalOrders";
import TotalProductItems from "../../Components/HomeComponents/TotalProductItems/TotalProductItems";
import TotalProfit from "../../Components/HomeComponents/TotalProfit/TotalProfit";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    let productsDetails = await axios.get(`http://localhost:8000/products/src`);
    setAllProducts(productsDetails.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(allProducts);

  return (
    <div>
      <Helmet>
        <title>Super Shop | Home</title>
      </Helmet>
      <div>
        <div className="px-10 py-4 grid grid-cols-3 gap-10">
          <TotalOrders></TotalOrders>
          <TotalProductItems allProducts={allProducts}></TotalProductItems>
          <TotalProfit></TotalProfit>
        </div>
        <div className="px-10 py-4">
          <hr />
        </div>
        <div className="px-10 py-4">
          <div className="overflow-x-auto">
            <table className="table table-zebra bg-transparent">
              <thead className="text-[#3F4E4F]">
                <tr>
                  <th>Buying Price</th>
                  <th>Product Name</th>
                  <th>Selling Price</th>
                </tr>
              </thead>
              <tbody className="bg-transparent border-2 border-black">
                <tr className="">
                  <td>20</td>
                  <td>Windows 8 Original Setup</td>
                  <td>40</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
