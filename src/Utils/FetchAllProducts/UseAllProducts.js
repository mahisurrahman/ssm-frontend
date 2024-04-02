import axios from "axios";
import { useEffect, useState } from "react";

const UseAllProducts = async () => {
  const [data, setData] = useState([]);
  const sourceProduct = async () => {
    let products = await axios.get(`http://localhost:8000/products/src`);
    console.log(products.data.data, "product");
    setData(products.data.data);
  };

  useEffect(() => {
    sourceProduct();
  }, []);

  return data;
};

export default UseAllProducts;
