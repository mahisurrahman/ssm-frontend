import { useContext } from "react";
import { BsBucket } from "react-icons/bs";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProviders";

const TotalProductItems = () => {
  const { allProducts } = useContext(AuthContext);
  return (
    <div className="px-4 py-4 flex items-center justify-between border-2 bg-[#EAD196] border-[#3F4E4F] rounded-lg">
      <BsBucket className="text-6xl text-[#3F4E4F]"></BsBucket>
      <div className="text-right">
        <h1 className="text-xl font-extrabold tracking-widest">Total Items</h1>
        <p className="text-2xl font-extrabold text-right">
          <span className="text-[#3F4E4F]">{allProducts.length}</span>
        </p>
      </div>
    </div>
  );
};

export default TotalProductItems;
