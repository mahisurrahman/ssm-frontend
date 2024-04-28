import { Helmet } from "react-helmet";
import TotalOrders from "../../Components/HomeComponents/TotalOrders/TotalOrders";
import TotalProductItems from "../../Components/HomeComponents/TotalProductItems/TotalProductItems";
import TotalProfit from "../../Components/HomeComponents/TotalProfit/TotalProfit";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useRequest from "../../apiService/useRequest";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [postRequest, getRequest] = useRequest();
  const [amount, setAmount] = useState(0);

  const fetchProducts = async () => {
    let prodDetails = await getRequest(`/products/src`);
    setAllProducts(prodDetails?.data?.data);
  };

  useEffect(() => {
    const saveCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(saveCart);
    fetchProducts();
  }, []);

  useEffect(() => {
    const totalAmount = cartItems.reduce(
      (total, item) => total + item.totalSellingPrice,
      0
    );
    setAmount(totalAmount);
  }, [cartItems]);

  return (
    <div>
      <Helmet>
        <title>Super Shop | Home</title>
      </Helmet>
      <Fade cascadia duration={2000} damping={1.2} direction="bottom">
        <div>
          <div className="px-10 py-4 grid grid-cols-3 gap-10">
            <TotalOrders cartItems={cartItems}></TotalOrders>
            <TotalProductItems allProducts={allProducts}></TotalProductItems>
            <TotalProfit cartItems={cartItems}></TotalProfit>
          </div>
          <div className="px-10 py-4">
            <hr />
          </div>
          {cartItems.length <= 0 ? (
            <>
              <Fade cascadia duration={2500} damping={1.2} direction="right">
                <h1 className="text-xl font-bold text-center">
                  No Products In your Cart Items
                </h1>
              </Fade>
            </>
          ) : (
            <Fade cascadia duration={2200} damping={1.2} direction="bottom">
              <div className="px-10 py-4">
                <div className="overflow-x-auto">
                  <table className="table table-zebra bg-transparent">
                    <thead className="text-[#3F4E4F]">
                      <tr>
                        <th>Item Name</th>
                        <th>Item Id</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                      </tr>
                    </thead>
                    {cartItems.map((item) => (
                      <tbody
                        key={item._id}
                        className="bg-transparent border-2 border-black"
                      >
                        <tr className="">
                          <td>{item.productName}</td>
                          <td>{item.productId}</td>
                          <td>{item.purchasedQuantity}</td>
                          <td>{item.totalSellingPrice}$</td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
                <div className="mx-10 px-20 flex justify-between">
                  <h1 className="text-xl font-bold">Total: </h1>
                  <h1 className="text-xl font-bold">{amount}$</h1>
                </div>
                <div className="flex justify-center items-center my-4">
                  <Link to="/cart">
                    <button className="px-6 py-2 rounded-lg bg-[#EAD196] font-bold text-slate-950 border-2 border-slate-950 duration-700 hover:duration-700 hover:scale-x-110">
                      Handle Cart Items from Cart Page
                    </button>
                  </Link>
                </div>
              </div>
            </Fade>
          )}
        </div>
      </Fade>
    </div>
  );
};

export default Home;
