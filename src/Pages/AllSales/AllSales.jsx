import { Helmet } from "react-helmet";
import TitleAndSubtitle from "../../Components/TitleAndSubtitle/TitleAndSubtitle";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProviders";
import { useState } from "react";
import { useEffect } from "react";
import useRequest from "../../apiService/useRequest";
import Modal from "react-modal";
import { Fade } from "react-awesome-reveal";

const AllSales = () => {
  const [sales, setSales] = useState([]);
  const [postRequest, getRequest] = useRequest();
  const [prodDetails, setProdDetails] = useState(null);
  const [stockDetais, setStockDetails] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const gettingSales = async () => {
    let salesDetails = await getRequest(`/sales/src`);
    setSales(salesDetails?.data?.data);
  };
  useEffect(() => {
    gettingSales();
  }, []);

  const handleSalesView = async (item) => {
    let prod = await getRequest(`/products/src/${item.productId}`);
    let prodDetails = prod?.data?.response?.data;

    let stock = await getRequest(`/stocks/src/${prodDetails._id}`);
    setStockDetails(stock?.data?.data);
    setProdDetails(prodDetails);
    setModalIsOpen(true);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "UTC",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <Helmet>
        <title> Super Shop | Sales</title>
      </Helmet>
      <Fade cascadia duration={2000} damping={1.2} direction="right">
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
                  <th>Product Id</th>
                  <th>Quantity Sold</th>
                  <th>Selling Price</th>
                  <th>Buying Price</th>
                  <th>Profit</th>
                  <th>Loss</th>
                  <th>Created Date</th>
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
                    <td>{formatDate(item.createdDate)}</td>
                    <td>
                      <button
                        onClick={() => handleSalesView(item)}
                        className="duration-700 px-3 py-1 rounded-lg bg-green-400 text-white font-bold hover:scale-125 hover:duration-700"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
      </Fade>
      <Modal
        className={
          "bg-[#EAD196] px-10 h-[90%] w-10/12 mx-auto mt-10 py-10 rounded-xl border-4 border-slate-950"
        }
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        {prodDetails && (
          <div className="flex justify-between items-center">
            <img
              className="border-4 border-slate-950 w-[40%] rounded-lg object-cover"
              src={prodDetails.productImg}
              alt=""
            />
            <div className="mt-5 text-xl text-slate-950 pl-10 leading-9">
              <h2 className="font-extrabold">
                Name:{" "}
                <span className="font-normal">{prodDetails.productName}</span>
              </h2>
              <h2 className="font-extrabold">
                Description:{" "}
                <span className="font-normal">{prodDetails.description}</span>
              </h2>
              <h2 className="font-extrabold">
                Buying Price:{" "}
                <span className="font-normal">{prodDetails.price}$</span>
              </h2>
              <h2 className="font-extrabold">
                Selling Price:{" "}
                <span className="font-normal">{stockDetais.stockQuantity}</span>
              </h2>
              <h2 className="font-extrabold">
                Profit:{" "}
                <span className="font-normal">{stockDetais.stockQuantity}</span>
              </h2>
              <h2 className="font-extrabold">
                Loss:{" "}
                <span className="font-normal">{stockDetais.stockQuantity}</span>
              </h2>
              <h2 className="font-extrabold">
                Creation Date:{" "}
                <span className="font-normal">{prodDetails.createDate}</span>
              </h2>
              <h2 className="font-extrabold">
                Stock Remaining:{" "}
                <span className="font-normal">{stockDetais.stockQuantity}</span>
              </h2>
              <h2 className="font-extrabold">
                Is Active:{" "}
                <span className="font-normal">{stockDetais.stockQuantity}</span>
              </h2>
            </div>
          </div>
        )}
        <button
          className="mr-5 mt-10 text-white font-bold text-xl px-8 py-2 bg-red-600 rounded-lg duration-700 hover:duration-700 hover:scale-125"
          onClick={() => setModalIsOpen(false)}
        >
          Close
        </button>
        {/* <button className="mr-5 mt-10 text-white font-bold text-xl px-8 py-2 bg-red-600 rounded-lg duration-700 hover:duration-700-700 hover:scale-125">Delete Sales</button>
        <button className="mr-5 mt-10 text-white font-bold text-xl px-8 py-2 bg-green-800 rounded-lg duration-700 hover:duration-700-700 hover:scale-125">Edit Sales</button> */}
      </Modal>
    </div>
  );
};

export default AllSales;
