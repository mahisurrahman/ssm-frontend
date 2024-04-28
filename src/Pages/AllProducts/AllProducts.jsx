import { Helmet } from "react-helmet";
import TitleAndSubtitle from "../../Components/TitleAndSubtitle/TitleAndSubtitle";
import { FaCheck } from "react-icons/fa";
import useRequest from "../../apiService/useRequest";
import { ImCross } from "react-icons/im";
import { AiOutlineMinus } from "react-icons/ai";
import { useEffect, useState } from "react";
import "./Allproducts.css";
import { Fade } from "react-awesome-reveal";

const AllProducts = () => {
  const [postRequest, getRequest] = useRequest();
  const [loading, setLoading] = useState(true);
  const [allProds, setAllProds] = useState([]);
  const [allStocks, setAllStocks] = useState([]);

  let fetchProducts = async () => {
    let productDetails = await getRequest(`/products/src/all`);
    setAllProds(productDetails?.data?.data);
    // setLoading(false);
    if (productDetails) {
      let stockDetails = await getRequest(`/stocks/src/all`);
      setAllStocks(stockDetails?.data?.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Super Shop | All Products</title>
      </Helmet>
      <div>
        <div className="mt-5">
          <TitleAndSubtitle
            title={"All Products"}
            subtitle={"Showcasing All Products From Our Database"}
          ></TitleAndSubtitle>
        </div>
        <Fade cascadia duration={1000} damping={1.2} direction="right">
          <div className="mt-5 px-10">
            <div className="overflow-x-auto">
              <div className="table-container">
                <table className="table table-zebra bg-transparent">
                  <thead className="text-slate-900 text-sm">
                    <tr>
                      <th>Product Name</th>
                      <th>Buying Price</th>
                      <th>Product Id</th>
                      <th>Product IMG</th>
                      <th className="text-green-600">Active</th>
                      <th className="text-red-600">Delete</th>
                    </tr>
                  </thead>
                  {allProds.map((prod) => (
                    <tbody
                      key={prod._id}
                      className="bg-transparent border-2 border-slate-900"
                    >
                      <tr className="">
                        <td>{prod.productName}</td>
                        <td>{prod.price}</td>
                        <td>{prod._id}</td>
                        <td>
                          <img
                            className="w-28 h-10 rounded-lg object-cover"
                            src={prod.productImg}
                          />
                        </td>
                        <td className="text-green-600 text-center text-xl">
                          {prod.isActive ? (
                            <FaCheck className="text-green-600"></FaCheck>
                          ) : (
                            <AiOutlineMinus className="text-green-600"></AiOutlineMinus>
                          )}
                        </td>
                        <td className="text-red-600 text-center text-xl">
                          {prod.isDeleted ? (
                            <ImCross className="text-red-600"></ImCross>
                          ) : (
                            <AiOutlineMinus className="text-red-600"></AiOutlineMinus>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AllProducts;
