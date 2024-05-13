import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useRequest from "../../apiService/useRequest";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import auth from "../../firebase/firebase.config";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const auth = getAuth(app);
  const [postRequest, getRequest] = useRequest();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [allStocks, setAllStocks] = useState([]);
  const [allSales, setAllSales] = useState([]);
  const [allReceipts, setAllReceipts] = useState([]);

  const fetchProducts = async () => {
    try {
      let productsDetails = await getRequest(`/products/src`);
      setAllProducts(productsDetails?.data?.data || []);

      let stockDetails = await getRequest(`/stocks/src`);
      setAllStocks(stockDetails?.data?.data || []);

      let salesDetails = await getRequest(`/sales/src`);
      setAllSales(salesDetails?.data?.data || []);

      let receiptDetails = await getRequest(`/receipts/src`);
      setAllReceipts(receiptDetails?.data?.data || []);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  const singInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
    // setLoading(false);
  }

  const singOutUser = () =>{
    return signOut(auth);
    // setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
    
   const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser);
      setLoading(false);
    });
    return ()=>{
      unsubscribe();
    }
  }, []);

  const authInfo = {
    allProducts,
    allStocks,
    allSales,
    allReceipts,
    setAllSales,
    setAllReceipts,
    setAllStocks,
    setAllProducts,
    loading,
    singOutUser,
    setLoading,
    fetchProducts,
    singInUser,
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
