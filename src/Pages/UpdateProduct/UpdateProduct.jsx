import { Link, useNavigate, useParams } from "react-router-dom";
import TitleAndSubtitle from "../../Components/TitleAndSubtitle/TitleAndSubtitle";
import { Helmet } from "react-helmet";
import useRequest from "../../apiService/useRequest";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const [prodDet, setProdDet] = useState([]);
  const [stockDet, setStockDet] = useState([]);
  const [postRequest, getRequest] = useRequest();
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  let findProd = async () => {
    let productDetails = await getRequest(`/products/src/${productId}`);
    let response = productDetails?.data?.response?.data;
    setProdDet(response);
  };

  let findStock = async () => {
    let stockDetails = await getRequest(`/stocks/src/${productId}`);
    let response = stockDetails?.data?.data;
    setStockDet(response);
  };

  useEffect(() => {
    findProd();
  }, []);

  useEffect(() => {
    findStock();
  }, []);

  const handleUpdateData = async (event) => {
    event.preventDefault();
    const form = event.target;
    const uptProductName = form.uptProductName.value;
    const uptStockQuantity = form.uptProductQuantity.value;
    const uptDescription = form.uptProductDescription.value;
    const uptBuyingPrice = form.uptProductBuyingPrice.value;
    const uptProductImage = form.uptProductImageUrl.value;

    if (
      uptProductName !== prodDet.productName ||
      uptDescription !== prodDet.description ||
      uptBuyingPrice !== prodDet.price ||
      uptProductImage !== prodDet.productImg
    ) {
      const uptProductDetails = {
        productName: uptProductName,
        description: uptDescription,
        price: uptBuyingPrice,
        productImg: uptProductImage,
      };

      let response = await postRequest(
        `/products/upt/${productId}`,
        uptProductDetails
      );

      if (response?.data?.response?.modifiedCount > 0) {
        Swal.fire("Product Details Updated");
        navigate("/all-products");
      }
    }

    if (uptStockQuantity !== stockDet.stockQuantity) {
      const uptProdStockDetails = {
        stockQuantity: uptStockQuantity,
      };

      let response = await postRequest(
        `/stocks/upt/${productId}`,
        uptProdStockDetails
      );

      if (response?.data?.error === false) {
        Swal.fire("Product Stocks Updated");
        navigate("/all-products");
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>Super Shop | Update Product</title>
      </Helmet>
      <div className="px-4 py-2">
        <div className="py-2">
          <TitleAndSubtitle
            title={"Update Product"}
            subtitle={"Change our Desired Produt Info"}
          ></TitleAndSubtitle>
        </div>
        <div className="w-10/12 mx-auto mt-5">
          <form onSubmit={handleUpdateData}>
            <div className="flex gap-2">
              <input
                className="mb-4 w-full py-2 px-4 text-sm font-semibold tracking-widest rounded-lg bg-transparent text-slate-900 border-2 border-[#3000C0] placeholder:text-sm"
                type="text"
                name="uptProductName"
                placeholder="Product Name"
                defaultValue={prodDet.productName}
              />
              <input
                className="mb-4 w-full py-2 px-4 text-sm font-semibold tracking-widest rounded-lg bg-transparent text-slate-900 border-2 border-[#3000C0] placeholder:text-sm"
                type="number"
                name="uptProductQuantity"
                placeholder="Product Quantity"
                defaultValue={stockDet.stockQuantity}
              />
            </div>
            <textarea
              className="h-[150px] mb-4 w-full py-2 px-4 text-sm font-semibold tracking-widest rounded-lg bg-transparent text-slate-900 border-2 border-[#3000C0] placeholder:text-sm"
              type="text"
              name="uptProductDescription"
              placeholder="Product Description"
              defaultValue={prodDet.description}
            />
            <div className="flex gap-2">
              <input
                className="mb-4 w-full py-2 px-4 text-sm font-semibold tracking-widest rounded-lg bg-transparent text-slate-900 border-2 border-[#3000C0] placeholder:text-sm"
                type="number"
                name="uptProductBuyingPrice"
                placeholder="Product Buying Price"
                defaultValue={prodDet.price}
              />
              <input
                className="mb-4 w-full py-2 px-4 text-sm font-semibold tracking-widest rounded-lg bg-transparent text-slate-900 border-2 border-[#3000C0] placeholder:text-sm"
                type="text"
                name="uptProductImageUrl"
                placeholder="Image URL"
                defaultValue={prodDet.productImg}
              />
            </div>
            <div className="w-full mt-5">
              <input
                className="duration-700 w-full py-2 text-center border border-transparent bg-yellow-400 text-sm rounded-lg text-[#000000] font-extrabold tracking-widest hover:bg-transparent hover:border-yellow-400 hover:text-slate-900 hover:cursor-pointer hover:duration-700"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
          <div className="flex items-center justify-center mt-5">
            <Link to="/products-list">
              <button className="duration-700 px-10 py-2 rounded-lg border-2 border-transparent text-lg bg-[#3000C0] font-extrabold tracking-widest hover:bg-transparent text-slate-100 hover:text-[#3000C0] hover:border-[#3000C0] hover:duration-700 hover:cursor-pointer">
                See All Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
