import { HiMiniShoppingCart } from "react-icons/hi2";
import { MdModeEdit } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import { GrOverview } from "react-icons/gr";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProviders";
import command from "nodemon/lib/config/command";
import useRequest from "../../apiService/useRequest";
import Swal from "sweetalert2";
import Modal from "react-modal";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  // console.log(product);
  const [postRequest, getRequest] = useRequest();
  const [stock, setStock] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loading, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const stockId = product._id;
  let stockFetch = async () => {
    let stockQty = await getRequest(`/stocks/src/${stockId}`);
    setStock(stockQty.data.data.stockQuantity);
    setLoading(false);
  };

  useEffect(() => {
    stockFetch();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  let prodId = product._id;
  const deleteProduct = async () => {
    let productDel = await getRequest(`/products/del/${prodId}`);
    console.log(productDel);
    setLoading(false);

    if (productDel) {
      console.log("hit", productDel?.data?.response?.data?.error);
      Swal.fire("Successfully Deleted").then(() => {
        window.location.reload();
      });
    }
  };

  return (
    <div className="card bg-slate-100 shadow-xl">
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
          <span className="text-green-500">{product.productName}</span>
        </h2>
        <h2 className="my-1 text-md font-bold">
          Price: <span className="text-green-500">{product.price}$</span>
        </h2>
        <h2 className="my-1 text-md font-bold">
          Stock Remaining: <span className="text-green-500">{stock}</span>
        </h2>
        <div className="flex justify-between mt-10 w-8/12 mx-auto">
          <button className="px-2 py-2 border-2 rounded-lg text-xl bg-yellow-400 border-yellow-400 text-slate-100 duration-700 hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer hover:border-slate-900 hover:duration-700">
            <GrOverview onClick={openModal}></GrOverview>
          </button>
          <button className="px-2 py-2 border-2 rounded-lg text-xl bg-green-400 border-green-400 text-slate-100 duration-700 hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer hover:border-slate-900 hover:duration-700">
            <HiMiniShoppingCart></HiMiniShoppingCart>
          </button>
          <Link to={`/update-product/${product._id}`}>
            <button className="px-2 py-2 border-2 rounded-lg text-xl bg-blue-400 border-blue-400 text-slate-100 duration-700 hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer hover:border-slate-900 hover:duration-700">
              <MdModeEdit></MdModeEdit>
            </button>
          </Link>
          <button
            onClick={deleteProduct}
            className="px-2 py-2 border-2 rounded-lg text-xl bg-red-400 border-red-400 text-slate-100 duration-700 hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer hover:border-slate-900 hover:duration-700"
          >
            <AiTwotoneDelete></AiTwotoneDelete>
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
        <div className="w-[500px]">
          <img
            className="w-[100%] h-[250px] object-cover"
            src={product.productImg}
            alt=""
          />
          <div className="mt-5">
            <h2 className="text-2xl font-semibold text-slate-700">
              Name: <span className="font-normal">{product.productName}</span>
            </h2>
            <p className="text-sm font-bold text-slate-700">
              Description:{" "}
              <span className="font-normal">{product.description}</span>
            </p>
            <p className="mt-5 text-sm font-bold text-slate-700">
              Price: <span>{product.price}$</span>
            </p>
            <p className="text-sm font-bold text-slate-700">
              Stock: <span>{stock} Remaining</span>
            </p>
            <button
              className="mt-5 px-2 py-2 text-xs text-slate-100 border border-red-400 bg-red-400 rounded-sm font-semibold duration-700 hover:duration-700 hover:cursor-pointer hover:bg-transparent hover:text-red-400"
              onClick={closeModal}
            >
              Close Modal
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductItem;
