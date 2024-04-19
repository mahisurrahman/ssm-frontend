import { Helmet } from "react-helmet";
import TitleAndSubtitle from "../../Components/TitleAndSubtitle/TitleAndSubtitle";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProviders";
import { useState } from "react";
import { useEffect } from "react";
import useRequest from "../../apiService/useRequest";

const AllSales = () => {
  const [sales, setSales] = useState([]);
  const [postRequest, getRequest] = useRequest();

  const gettingSales = async () => {
    let salesDetails = await getRequest(`/sales/src`);
    setSales(salesDetails?.data?.data);
  };
  useEffect(() => {
    gettingSales();
  }, []);

  const handleSalesDelete = (item)=>{
    
  }

  return (
    <div>
      <Helmet>
        <title> Super Shop | Sales</title>
      </Helmet>
      <div className="mt-5">
        <TitleAndSubtitle
          title={"Sale Records"}
          subtitle={"Watch Your Profit and Losses"}
        ></TitleAndSubtitle>
        <div className="mx-5">
          <div className="overflow-x-auto">
            <table className="table table-zebra bg-transparent">
              <thead className="text-[#3F4E4F]">
                <tr>
                  <th>product Id</th>
                  <th>Quantity Sold</th>
                  <th>Selling Price</th>
                  <th>Buying Price</th>
                  <th>Profit</th>
                  <th>Loss</th>
                  <th>Action</th>
                </tr>
              </thead>

              {sales.map((item) => (
                <tbody
                  key={item._id}
                  className="bg-transparent border-2 border-black"
                >
                  <tr className="">
                    <td>{item.productId}</td>
                    <td>{item.quantitySold}</td>
                    <td>{item.sellingPrice}</td>
                    <td>{item.buyingPrice}</td>
                    <td>{item.profit}</td>
                    <td>{item.loss}</td>
                    <td>
                      <button onClick={()=> handleSalesDelete(item)} className="duration-700 px-3 py-1 rounded-lg bg-red-400 text-white font-bold hover:scale-125 hover:duration-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSales;
