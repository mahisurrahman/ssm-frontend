import { Helmet } from "react-helmet";
import TitleAndSubtitle from "../../Components/TitleAndSubtitle/TitleAndSubtitle";
import { FaCheck } from "react-icons/fa";
import useRequest from "../../apiService/useRequest";
import { useEffect, useState } from "react";
import "./Allproducts.css";

const AllProducts = () => {
  const [postRequest, getRequest] = useRequest();
  const [loading, setLoading] = useState(true);
  const [allProds, setAllProds] = useState([]);

  let fetchProducts = async () => {
    let productDetails = await getRequest(`/products/src/all`);
    setAllProds(productDetails?.data?.data);
    setLoading(false);
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
        <div className="mt-5 px-10">
          <div className="overflow-x-auto">
            <div className="table-container">
              <table className="table table-zebra bg-transparent">
                <thead className="text-slate-900 text-lg">
                  <tr>
                    <th>Product Name</th>
                    <th>Buying Price</th>
                    <th className="text-green-600">Active</th>
                    <th className="text-red-600">Delete</th>
                  </tr>
                </thead>
                {console.log(allProds)}
                {allProds.map((prod) => (
                  <tbody
                    key={prod._id}
                    className="bg-transparent border-2 border-black"
                  >
                    <tr className="">
                      <td>{prod.productName}</td>
                      <td>{prod.price}</td>
                      <td className="text-green-600 text-center text-xl">
                        {prod.isActive && (
                          <FaCheck className="text-green-600"></FaCheck>
                        )}
                      </td>
                      <td className="text-red-600 text-center text-xl">
                        {prod.isDeleted && (
                          <FaCheck className="text-red-600"></FaCheck>
                        )}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
