import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import ProductItem from "../../Components/ProductListComp/ProductItem";
import useRequest from "../../apiService/useRequest";
import TitleAndSubtitle from "../../Components/TitleAndSubtitle/TitleAndSubtitle";

const ProductLists = () => {
  const [postRequest, getRequest] = useRequest();
  const [mergedInfo, setMergedInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 4;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchData = async () => {
    try {
      const productsResponse = await getRequest(`/products/src`);
      const stocksResponse = await getRequest(`/stocks/src`);

      const products = productsResponse?.data?.data || [];
      const stocks = stocksResponse?.data?.data || [];

      const mergedData = products.map((product) => {
        const stock = stocks.find((stock) => stock.productId === product._id);
        if (stock) {
          return {
            ...product,
            stockId: stock._id,
            stockQuantity: stock.stockQuantity,
          };
        } else {
          return null;
        }
      });

      setMergedInfo(mergedData.filter(Boolean));
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = mergedInfo.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div>
      <Helmet>
        <title>Super Shop | Product List</title>
      </Helmet>
      <div className="mt-4">
        <TitleAndSubtitle
          title={"Active Products"}
          subtitle={"Choose Wisely from all of these Branded Collection"}
        ></TitleAndSubtitle>
      </div>
      <div className="px-4 pb-4">
        <div className="w-full h-[60vh] grid grid-cols-4 gap-4 justify-start items-center">
          {loading ? (
            <p>Loading...</p>
          ) : (
            currentProducts.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))
          )}
        </div>

        <div className="flex justify-center mt-7">
          {Array.from(
            { length: Math.ceil(mergedInfo.length / productPerPage) },
            (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none ${
                  currentPage === index + 1 ? "bg-gray-400" : ""
                }`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductLists;
