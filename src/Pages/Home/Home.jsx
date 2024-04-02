import { Helmet } from "react-helmet";
import TotalOrders from "../../Components/HomeComponents/TotalOrders/TotalOrders";
import TotalProductItems from "../../Components/HomeComponents/TotalProductItems/TotalProductItems";
import TotalProfit from "../../Components/HomeComponents/TotalProfit/TotalProfit";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Super Shop | Home</title>
      </Helmet>
      <div>
        <div className="px-10 py-4 grid grid-cols-3 gap-10">
          <TotalOrders></TotalOrders>
          <TotalProductItems></TotalProductItems>
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
              <tbody className="bg-transparent border-2 border-black">
                <tr className="">
                  <td>40</td>
                  <td>Windows 10 Original Setup</td>
                  <td>80</td>
                </tr>
              </tbody>
              <tbody className="bg-transparent border-2 border-black">
                <tr className="">
                  <td>80</td>
                  <td>Windows 11 Original Setup</td>
                  <td>160</td>
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
