import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import useRequest from "../../apiService/useRequest";
import Swal from "sweetalert2";
import TitleAndSubtitle from "../../Components/TitleAndSubtitle/TitleAndSubtitle";
import { Fade } from "react-awesome-reveal";

const CreateProduct = () => {
  const [postRequest] = useRequest();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (loading === true) {
    return (
      <div className="w-10/12 mx-auto h-[100vh] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const handleAddProduct = async (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const prodName = form.productName.value;
    const prodQty = form.productQuantity.value;
    const description = form.productDescription.value;
    const buyingPrice = form.productBuyingPrice.value;
    const prodImg = form.productImageUrl.value;
    const productDetails = {
      productName: prodName,
      description: description,
      stockQuantity: prodQty,
      price: buyingPrice,
      productImg: prodImg,
    };

    let addProduct = await postRequest("/products/crt", productDetails);
    if (addProduct?.data?.response?.data?.isActive === true) {
      setLoading(false);
      Swal.fire(
        `Successfully Added the ${addProduct?.data?.response?.data?.productName} product`
      );
      navigate("/products-list");
    } else {
      Swal.fire("Failed to Add");
    }
  };

  return (
    <div>
      <Helmet>
        <title>Super Shop | Create Product</title>
      </Helmet>
      <div className="px-4 py-2">
        <div className="">
          <TitleAndSubtitle
            title={"Create Product"}
            subtitle={"Fill Up The Information with Precision"}
          ></TitleAndSubtitle>
        </div>
        <div className="w-10/12 mx-auto mt-5">
          <form onSubmit={handleAddProduct}>
            <Fade cascadia duration={1000} damping={1.2} direction="right">
              <div className="flex gap-2">
                <input
                  className="mb-4 w-full py-2 px-4 text-sm font-semibold tracking-widest rounded-lg bg-transparent text-slate-900 border-2 border-[#FFBE00] placeholder:text-sm"
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                />
                <input
                  className="mb-4 w-full py-2 px-4 text-sm font-semibold tracking-widest rounded-lg bg-transparent text-slate-900 border-2 border-[#FFBE00] placeholder:text-sm"
                  type="number"
                  name="productQuantity"
                  placeholder="Product Quantity"
                />
              </div>
            </Fade>
            <Fade cascadia duration={1500} damping={1.2} direction="right">
              <textarea
                className="h-[150px] mb-4 w-full py-2 px-4 text-sm font-semibold tracking-widest rounded-lg bg-transparent text-slate-900 border-2 border-[#FFBE00] placeholder:text-sm"
                type="text"
                name="productDescription"
                placeholder="Product Description"
              />
            </Fade>
            <Fade cascadia duration={2000} damping={1.2} direction="right">
              <div className="flex gap-2">
                <input
                  className="mb-4 w-full py-2 px-4 text-sm font-semibold tracking-widest rounded-lg bg-transparent text-slate-900 border-2 border-[#FFBE00] placeholder:text-sm"
                  type="number"
                  name="productBuyingPrice"
                  placeholder="Product Buying Price"
                />
                <input
                  className="mb-4 w-full py-2 px-4 text-sm font-semibold tracking-widest rounded-lg bg-transparent text-slate-900 border-2 border-[#FFBE00] placeholder:text-sm"
                  type="text"
                  name="productImageUrl"
                  placeholder="Image URL"
                />
              </div>
            </Fade>
            <Fade cascadia duration={2500} damping={1.2} direction="right">
              <div className="w-full mt-5">
                <input
                  className="duration-700 w-full py-2 text-center border border-transparent bg-yellow-400 text-sm rounded-lg text-[#000000] font-extrabold tracking-widest hover:bg-transparent hover:border-yellow-400 hover:uptProductDetailstext-slate-900 hover:cursor-pointer hover:duration-700"
                  type="submit"
                  value="Submit"
                />
              </div>
            </Fade>
          </form>
          <Fade cascadia duration={3000} damping={1.2} direction="right">
            <div className="flex items-center justify-center mt-5">
              <Link to="/products-list">
                <button className="duration-700 px-10 py-2 rounded-lg border-2 border-transparent text-lg bg-[#BBAB8C] font-extrabold tracking-widest hover:bg-transparent text-slate-100 hover:text-[#BBAB8C] hover:border-[#FFBE00] hover:duration-700 hover:cursor-pointer">
                  See All Products
                </button>
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
