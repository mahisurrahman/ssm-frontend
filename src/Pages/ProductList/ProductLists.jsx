import TitleAndSubtitle from "../../Components/TitleAndSubtitle/TitleAndSubtitle";

import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProviders";
import ProductItem from "../../Components/ProductListComp/ProductItem";

const ProductLists = () => {
  const { allProducts, allStocks } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 4;

  const lastProd = currentPage * productPerPage;
  const fristProd = lastProd - productPerPage;
  const currentProducts = allProducts.slice(fristProd, lastProd);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkingStock = async () => {
    console.log(allProducts, "All Products Lists");
    console.log(allStocks, "All Products Lists -- s");

    const mergedProducts = allProducts.map((product) => {
      const foundStock = allStocks.find(
        (stock) => stock.productId === product._id
      );

      if (foundStock) {
        return {
          ...product,
          stockId: foundStock.stockId,
          stockQuantity: foundStock.stockQuantity,
        };
      }
    });
  };

  useEffect(() => {
    checkingStock();
  }, [checkingStock]);

  return (
    <div>
      <Helmet>
        <title>Super Shop | Product List</title>
      </Helmet>
      <div className="px-4 py-4">
        <TitleAndSubtitle
          title={"Active Products"}
          subtitle={"Choose Wisely from all of these Branded Collection"}
        ></TitleAndSubtitle>

        <div className="w-full h-[60vh] grid grid-cols-4 gap-4 justify-start items-center">
          {currentProducts.map((product) => (
            <ProductItem key={product._id} product={product}></ProductItem>
          ))}
        </div>

        <div className="flex justify-center mt-7">
          {Array.from(
            { length: Math.ceil(allProducts.length / productPerPage) },
            (_, index) => (
              <buttonfalse
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none ${
                  currentPage === index + 1 ? "bg-gray-400" : ""
                }`}
              >
                {index + 1}
              </buttonfalse>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductLists;
