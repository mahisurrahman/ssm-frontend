import { HiMiniShoppingCart } from "react-icons/hi2";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { useContext, useEffect, useReducer, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProviders";
import useRequest from "../../apiService/useRequest";
import { IoClose } from "react-icons/io5";
import Swal from "sweetalert2";
import Modal from "react-modal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { Fade } from "react-awesome-reveal";

const ProductItem = ({ product }) => {
  const [postRequest, getRequest] = useRequest();
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading === true) {
    return (
      <div className="w-10/12 mx-auto h-[100vh] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>;
      </div>
    );
  }

  const handleCart = (p) => {
    const quantity = prompt("Enter the Quantity: ", "1");
    if (quantity === null || quantity === "") {
      Swal.fire("Invalid Quantity");
      return;
    }

    const parseQuantity = parseInt(quantity);
    if (isNaN(parseQuantity) || parseQuantity <= 0) {
      Swal.fire("Invalid Quantity Amount");
      return;
    }

    const sellingPriceInitial = prompt("Enter the Selling price", `${p.price}`);
    if (sellingPriceInitial === null || sellingPriceInitial === "") {
      Swal.fire("Invalid Selling Price");
      return;
    }

    const sellingP = parseInt(sellingPriceInitial);
    if (isNaN(sellingP)) {
      Swal.fire("Selling Amount is not a Number");
      return;
    }

    let totalBuyingPrice = p.price * parseQuantity;
    let totalSellingPrice = sellingP * parseQuantity;
    let carts = JSON.parse(localStorage.getItem("cart")) || [];

    const productExists = carts.findIndex((item) => item.productId === p._id);

    if (productExists !== -1) {
      carts[productExists].purchasedQuantity += parseQuantity;
      carts[productExists].totalBuyingPrice += totalBuyingPrice;
      carts[productExists].sellingPrice = sellingP;
      carts[productExists].totalSellingPrice += totalSellingPrice;
    } else {
      const filteredData = {
        productId: p._id,
        productName: p.productName,
        stockId: p.stockId,
        stockQuantity: p.stockQuantity,
        buyingPrice: p.price,
        sellingPrice: sellingP,
        productImg: p.productImg,
        description: p.description,
        purchasedQuantity: parseQuantity,
        totalBuyingPrice: totalBuyingPrice,
        totalSellingPrice: totalSellingPrice,
      };
      carts.push(filteredData);
    }
    localStorage.setItem("cart", JSON.stringify(carts));
    setCart(carts);
    Swal.fire("Added to Cart");
    setLoading(false);
    navigate("/cart");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  let prodId = product._id;
  const deleteProduct = async () => {
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
        setLoading(true);
        let deleteProd = async () => {
          let productDel = await getRequest(`/products/del/${prodId}`);
          console.log(productDel);
        };
        deleteProd();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        setLoading(false);
        closeModal();
        navigate("/products-list");
      }
    });
  };

  return (
    <Fade cascadia duration={2000} damping={1.2} direction="bottom">
      <div className="card bg-[#ffefc9] shadow-xl">
        <figure>
          <img
            className="h-52 w-full object-cover"
            src={product.productImg}
            alt="Not Found"
          />
        </figure>
        <div className="px-4 py-5">
          <h2 className="my-1 text-md font-bold">
            Prod Name:{" "}
            <span className="font-normal tracking-wider">
              {product.productName}
            </span>
          </h2>
          <h2 className="my-1 text-md font-bold">
            Price:{" "}
            <span className="font-normal tracking-wider">{product.price}$</span>
          </h2>
          <h2 className="my-1 text-md font-bold">
            Stock Remaining:{" "}
            <span className="font-normal tracking-wider">
              {product.stockQuantity}
            </span>
          </h2>
          <div className="mt-10 w-11/12 mx-auto">
            <button
              onClick={openModal}
              className="w-full text-center px-2 py-2 border-2 rounded-lg text-xl bg-[#EAD196] border-[#EAD196] text-slate-900 duration-700 hover:scale-110 hover:text-slate-900 hover:cursor-pointer hover:border-slate-900 hover:duration-700 flex items-center justify-center gap-2 font-bold"
            >
              <GrOverview></GrOverview>
              Show Details
            </button>
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          <div className="w-[800px] h-[90vh]">
            <img
              className="w-[100%] h-[400px] object-cover"
              src={product.productImg}
              alt=""
            />
            <div className="mt-5">
              <h2 className="text-2xl font-semibold text-slate-700">
                Name: <span className="font-normal">{product.productName}</span>
              </h2>
              <p className="text-lg font-bold text-slate-700 h-[100px] overflow-y-auto">
                Description:{" "}
                <span className="font-normal">{product.description}</span>
              </p>
              <p className="mt-5 text-md font-bold text-slate-700">
                Price: <span className="font-normal">{product.price}$</span>
              </p>
              <p className="text-md font-bold text-slate-700">
                Stock:{" "}
                <span className="font-normal">
                  {product.stockQuantity} Remaining
                </span>
              </p>
              <div className="mt-5 grid grid-cols-4 gap-5">
                <button
                  onClick={() => {
                    handleCart(product);
                  }}
                  className="w-full h-[50px] text-center px-2 py-2 border-2 rounded-lg text-xl bg-[#EAD196] border-[#EAD196] text-slate-900 duration-700 hover:bg-green-200 hover:text-slate-900 hover:cursor-pointer hover:scale-90  hover:border-slate-900 hover:duration-700 flex items-center justify-center gap-2 font-bold"
                >
                  <HiMiniShoppingCart></HiMiniShoppingCart>
                  Buy Now
                </button>
                <Link to={`/update-product/${product._id}`}>
                  <button className="w-full h-[50px] text-center px-2 py-2 border-2 rounded-lg text-xl bg-[#EAD196] border-[#EAD196] text-slate-900 duration-700 hover:bg-blue-200 hover:text-slate-900 hover:scale-150 hover:cursor-pointer hover:border-slate-900 hover:duration-700 flex items-center justify-center gap-2 font-bold">
                    <MdModeEdit></MdModeEdit>
                    Edit Info
                  </button>
                </Link>
                <button
                  onClick={deleteProduct}
                  className="w-full h-[50px] text-center px-2 py-2 border-2 rounded-lg text-xl bg-[#EAD196] border-[#EAD196] text-slate-900 duration-700 hover:bg-red-200 hover:text-slate-900 hover:cursor-pointer hover:scale-150  hover:border-slate-900 hover:duration-700 flex items-center justify-center gap-2 font-bold"
                >
                  <MdDelete className="text-slate-900"></MdDelete>
                  Delete
                </button>
                <button
                  className="flex items-center justify-center gap-2 w-full h-[50px] px-2 py-2 text-xl text-slate-900 border bg-[#EAD196] border-[#EAD196] rounded-lg font-semibold duration-700 hover:duration-700 hover:scale-90 hover:cursor-pointer hover:bg-pink-200 hover:text-red-400"
                  onClick={closeModal}
                >
                  <IoClose></IoClose>
                  Close Modal
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </Fade>
  );
};

export default ProductItem;
