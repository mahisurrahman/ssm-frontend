import React, { useState } from "react";
import { Helmet } from "react-helmet";
import TitleAndSubtitle from "../../Components/TitleAndSubtitle/TitleAndSubtitle";
import { FcDown, FcUp } from "react-icons/fc";


const Cart = () => {

  let data = JSON.parse(localStorage.getItem("cart"));
  console.log(data);

  const handleCartIncrease = ()=>{
    console.log('Increase');
  };

  const handleCartDecrease = () =>{
    console.log('Decrease');
  };

  const handleCartDelete = () =>{
    console.log('Delete');
  };

  const handleCartConfirm = () =>{
    console.log('Confirm');
  }
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
        <div className="overflow-x-auto mx-10">
          <div className="table-container">
            <table className="table table-zebra bg-transparent">
              <thead className="text-slate-900 text-sm">
                <tr>
                  <th>Product Name</th>
                  <th>Buying Price</th>
                  <th>Stock Remaining</th>
                  <th>Purchased Quantity</th>
                  <th>Total Cost</th>
                  <th>Remove Product</th>
                  <th>Confirm Product</th>
                </tr>
              </thead>
              {data.map((prod) => (
                <tbody
                  key={prod._id}
                  className="bg-transparent border-2 border-slate-900"
                >
                  <tr className="">
                    <td className="font-bold">{prod.productName}</td>
                    <td>{prod.sellingPrice}</td>
                    <td>
                      {
                        prod.stockQuantity - prod.purchasedQuantity
                      }
                    </td>
                    <td>
                      <div className="flex items-center gap-8 w-8/12">
                        <FcUp onClick={handleCartIncrease} className="text-2xl duration-700 hover:duration-700 hover:scale-150 border-2 rounded-lg bg-slate-100"></FcUp>
                        <p className="flex-grow">{prod.purchasedQuantity}</p>
                        <FcDown onClick={handleCartDecrease} className="text-2xl duration-700 hover:duration-700 hover:scale-150 border-2 rounded-lg bg-slate-100"></FcDown>
                      </div>
                    </td>
                    <td>{prod.totalPrice}$</td>
                    <td><button onClick={handleCartDelete} className="px-6 py-2 bg-red-500 rounded-lg text-slate-100 font-bold text-md duration-700 hover:scale-125 hover:duration-700">Delete</button></td>
                    <td><button onClick={handleCartConfirm} className="px-6 py-2 bg-green-500 rounded-lg text-slate-100 font-bold text-md duration-700 hover:scale-125 hover:duration-700">Confirm</button></td>
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

export default Cart;
