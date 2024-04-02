import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useRequest from "../../apiService/useRequest";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  //Fetching all Products//
  const [postRequest, getRequest] = useRequest();
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchProducts = async () => {
    let productsDetails = await getRequest(`/products/src`);
    setAllProducts(productsDetails.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const authInfo = {
    allProducts,
    setAllProducts,
    loading,
    setLoading,
    fetchProducts,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
