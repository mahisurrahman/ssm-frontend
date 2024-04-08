import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useRequest from "../../apiService/useRequest";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [postRequest, getRequest] = useRequest();
  const [allProducts, setAllProducts] = useState([]);
  const [allStocks, setAllStocks] = useState([]);
  const [loading, setLoading] = useState(true);


    const fetchProducts = async () => {
      try {
        let productsDetails = await getRequest(`/products/src`);
        setAllProducts(productsDetails?.data?.data || []);
  
        let stockDetails = await getRequest(`/stocks/src`);
        setAllStocks(stockDetails?.data?.data || []);
        setLoading(false);
      } catch (error) {
        
        console.log(error)
      }
   
    }

    useEffect(() => {
      fetchProducts();
    }, []);

    const authInfo = {
      allProducts,
      allStocks,
      setAllStocks,
      setAllProducts,
      loading,
      setLoading,
      fetchProducts,
    };

    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  } 


export default AuthProviders;
