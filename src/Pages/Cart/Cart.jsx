import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import TitleAndSubtitle from "../../Components/TitleAndSubtitle/TitleAndSubtitle";
import { FcDown, FcUp } from "react-icons/fc";
import Swal from "sweetalert2";
import useRequest from "../../apiService/useRequest";
import { Fade } from "react-awesome-reveal";

const Cart = () => {
  const [postRequest, getRequest] = useRequest();
  const [cartItems, setCartItems] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const saveCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(saveCart);
  }, []);

  const handleCartIncrease = (prod) => {
    let prodId = prod.productId;
    const updateCart = cartItems.map((item) => {
      if (item.productId === prodId) {
        const updatedQuantity = item.purchasedQuantity + 1;
        const updatedTotalCost = updatedQuantity * item.buyingPrice;
        const updatedTotalSelling = updatedQuantity * item.sellingPrice;
        return {
          ...item,
          purchasedQuantity: updatedQuantity,
          totalBuyingPrice: updatedTotalCost,
          totalSellingPrice: updatedTotalSelling,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updateCart));
    setCartItems(updateCart);
  };

  const handleCartDecrease = (prod) => {
    let prodId = prod.productId;
    const updateCart = cartItems
      .map((item) => {
        if (item.productId === prodId) {
          const updatedQuantity = item.purchasedQuantity - 1;
          if (updatedQuantity < 1) {
            Swal.fire("Quantity Going Below 1");
            return null;
          }
          const updatedTotalCost = updatedQuantity * item.buyingPrice;
          const updatedTotalSelling = updatedQuantity * item.sellingPrice;
          return {
            ...item,
            purchasedQuantity: updatedQuantity,
            totalBuyingPrice: updatedTotalCost,
            totalSellingPrice: updatedTotalSelling,
          };
        }
        return item;
      })
      .filter(Boolean);
    localStorage.setItem("cart", JSON.stringify(updateCart));
    setCartItems(updateCart);
  };

  const handleCartDelete = (prod) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const prodId = prod.productId;
        const updateCart = cartItems.filter(
          (item) => item.productId !== prodId
        );
        localStorage.setItem("cart", JSON.stringify(updateCart));
        setCartItems(updateCart);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleCartConfirm = (prod) => {
    setIsLoading(true);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const prodId = prod.productId;
          const prodDetails = cartItems.find(
            (item) => item.productId === prodId
          );
          const response = await postRequest(`/sales/crt`, {
            sales: [
              {
                productId: prodDetails.productId,
                quantitySold: prodDetails.purchasedQuantity,
                sellingPrice: prodDetails.sellingPrice,
                buyingPrice: prodDetails.buyingPrice,
              },
            ],
          });

          if (response?.data?.error === false) {
            Swal.fire({
              title: "Confirmed Order!",
              text: "Your Product Is Ordered.",
              icon: "success",
            });
            const updatedCartItems = cartItems.filter(
              (item) => item.productId !== prodId
            );
            localStorage.setItem("cart", JSON.stringify(updatedCartItems));
            setCartItems(updatedCartItems);
          } else {
            Swal.fire({
              title: "Error!",
              text: "Failed to confirm sales.",
              icon: "error",
            });
          }
        } catch (error) {
          console.log("Error in Confirming Sales", error);
          Swal.fire({
            title: "Error!",
            text: "Error occurred in Sales Creation.",
            icon: "error",
          });
        } finally {
          setIsLoading(false);
        }
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Super Shop | Cart</title>
      </Helmet>
      <div className="mt-5">
        <TitleAndSubtitle
          title={"My Cart"}
          subtitle={"List of your Interested Products"}
        ></TitleAndSubtitle>
        <Fade cascadia duration={3000} damping={1.2} direction="right">
          <div className="overflow-x-auto mx-10">
            <div className="table-container">
              <table className="table table-zebra bg-transparent">
                <thead className="text-slate-900 text-xs">
                  <tr>
                    <th>Product Name</th>
                    <th>Buying Price</th>
                    <th>Selling Price</th>
                    <th>Stock Remaining</th>
                    <th>Purchased Quantity</th>
                    <th>Total Buying Cost</th>
                    <th>Total Selling Cost</th>
                    <th>Remove Product</th>
                    <th>Confirm Product</th>
                  </tr>
                </thead>
                {cartItems?.map((prod) => (
                  <tbody
                    key={prod._id}
                    className="bg-transparent border-2 border-slate-900"
                  >
                    <tr className="">
                      <td className="font-bold">{prod.productName}</td>
                      <td>{prod.buyingPrice}</td>
                      <td>{prod.sellingPrice}</td>
                      <td>{prod.stockQuantity - prod.purchasedQuantity}</td>
                      <td>
                        <div className="flex items-center gap-8 w-10/12">
                          <FcUp
                            onClick={() => {
                              handleCartIncrease(prod);
                            }}
                            className="text-2xl duration-700 hover:duration-700 hover:scale-150 border-2 rounded-lg bg-slate-100"
                          ></FcUp>
                          <p className="flex-grow">{prod.purchasedQuantity}</p>
                          <FcDown
                            onClick={() => {
                              handleCartDecrease(prod);
                            }}
                            className="text-2xl duration-700 hover:duration-700 hover:scale-150 border-2 rounded-lg bg-slate-100"
                          ></FcDown>
                        </div>
                      </td>
                      <td>{prod.totalBuyingPrice}$</td>
                      <td>{prod.totalSellingPrice}$</td>
                      <td>
                        <button
                          onClick={() => {
                            handleCartDelete(prod);
                          }}
                          className="px-6 py-2 bg-red-500 rounded-lg text-slate-100 font-bold text-md duration-700 hover:scale-125 hover:duration-700"
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        {isLoading ? (
                          <span className="loading loading-spinner loading-lg"></span>
                        ) : (
                          <button
                            onClick={() => {
                              handleCartConfirm(prod);
                            }}
                            className="px-6 py-2 bg-green-500 rounded-lg text-slate-100 font-bold text-md duration-700 hover:scale-125 hover:duration-700"
                          >
                            Confirm
                          </button>
                        )}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Cart;
