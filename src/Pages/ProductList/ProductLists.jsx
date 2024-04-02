import TitleAndSubtitle from "../../Components/TitleAndSubtitle/TitleAndSubtitle";

import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProviders";
import ProductItem from "../../Components/ProductListComp/ProductItem";

const ProductLists = () => {
  const { allProducts } = useContext(AuthContext);
  return (
    <div>
      <Helmet>
        <title>Super Shop | Product List</title>
      </Helmet>
      <div className="px-4 py-4">
        <TitleAndSubtitle
          title={"All Products"}
          subtitle={"Choose Wisely from all of these Branded Collection"}
        ></TitleAndSubtitle>

        <div className="h-[60vh] grid grid-cols-3 gap-10 justify-start items-center">
          {allProducts.map((product) => (
            <ProductItem key={product._id} product={product}></ProductItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductLists;
