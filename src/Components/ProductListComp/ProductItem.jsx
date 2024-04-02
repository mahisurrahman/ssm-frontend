import { HiMiniShoppingCart } from "react-icons/hi2";
import { MdModeEdit } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProviders";
import command from "nodemon/lib/config/command";
import useRequest from "../../apiService/useRequest";

const ProductItem = ({ product }) => {
  const [postRequest, getRequest] = useRequest();
  const [stock, setStock] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);

  const stockId = product._id;
  let stockFetch = async () => {
    let stockQty = await getRequest(`/stocks/src/${stockId}`);
    setStock(stockQty.data.data.stockQuantity);
    setLoading(false);
  };

  useEffect(() => {
    stockFetch();
  }, []);

  console.log(stock);

  return (
    <div className="card bg-slate-100 shadow-xl">
      <figure>
        <img
          className="h-60 w-full object-cover"
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
          Description:{" "}
          <span className="text-green-500">{product.description}</span>
        </h2>
        <h2 className="my-1 text-md font-bold">
          Price: <span className="text-green-500">{product.price}$</span>
        </h2>
        <h2 className="my-1 text-md font-bold">
          Stock Remaining: <span className="text-green-500">{stock}</span>
        </h2>
        <div className="flex justify-between mt-10 w-8/12 mx-auto">
          <button className="px-2 py-2 border-2 rounded-lg text-xl bg-green-400 border-green-400 text-slate-100 duration-700 hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer hover:border-slate-900 hover:duration-700">
            <HiMiniShoppingCart></HiMiniShoppingCart>
          </button>
          <button className="px-2 py-2 border-2 rounded-lg text-xl bg-blue-400 border-blue-400 text-slate-100 duration-700 hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer hover:border-slate-900 hover:duration-700">
            <MdModeEdit></MdModeEdit>
          </button>
          <button className="px-2 py-2 border-2 rounded-lg text-xl bg-red-400 border-red-400 text-slate-100 duration-700 hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer hover:border-slate-900 hover:duration-700">
            <AiTwotoneDelete></AiTwotoneDelete>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
