import { Link } from "react-router-dom";
import TitleAndSubtitle from "../../Components/TitleAndSubtitle/TitleAndSubtitle";

const CreateProduct = () => {
  return (
    <div className="px-4 py-2">
      <div className="py-2">
        <TitleAndSubtitle
          title={"Create Product"}
          subtitle={"Fill Up The Information with Precision"}
        ></TitleAndSubtitle>
      </div>
      <div className="w-10/12 mx-auto mt-5">
        <form>
          <div className="flex gap-2">
            <input
              className="mb-4 w-full py-2 px-4 text-2xl font-semibold tracking-widest rounded-lg bg-transparent text-slate-900 border-2 border-[#3000C0] placeholder:text-sm"
              type="text"
              name="productName"
              placeholder="Product Name"
            />
            <input
              className="mb-4 w-full py-2 px-4 text-2xl font-semibold tracking-widest rounded-lg bg-transparent text-slate-900 border-2 border-[#3000C0] placeholder:text-sm"
              type="number"
              name="productQuantity"
              placeholder="Product Quantity"
            />
          </div>
          <textarea
            className="mb-4 w-full py-2 px-4 text-lg font-semibold tracking-widest rounded-lg bg-transparent text-slate-900 border-2 border-[#3000C0] placeholder:text-sm"
            type="text"
            name="productDescription"
            placeholder="Product Description"
          />
          <div className="flex gap-2">
            <input
              className="mb-4 w-full py-2 px-4 text-2xl font-semibold tracking-widest rounded-lg bg-transparent text-slate-900 border-2 border-[#3000C0] placeholder:text-sm"
              type="number"
              name="productBuyingPrice"
              placeholder="Product Buying Price"
            />
            <input
              className="mb-4 w-full py-2 px-4 text-2xl font-semibold tracking-widest rounded-lg bg-transparent text-slate-900 border-2 border-[#3000C0] placeholder:text-sm"
              type="text"
              name="productImageUrl"
              placeholder="Image URL"
            />
          </div>
          <div className="w-full mt-5">
            <input
              className="duration-700 w-full py-2 text-center border border-transparent bg-yellow-400 text-2xl rounded-lg text-[#000000] font-extrabold tracking-widest hover:bg-transparent hover:border-yellow-400 hover:text-slate-900 hover:cursor-pointer hover:duration-700"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
        <div className="flex items-center justify-center mt-5">
          <Link to="/products-list">
            <button className="duration-700 px-10 py-2 rounded-lg border-2 border-transparent text-lg bg-[#3000C0] font-extrabold tracking-widest hover:bg-transparent text-slate-100 hover:text-[#3000C0] hover:border-[#3000C0] hover:duration-700 hover:cursor-pointer">
              See All Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
