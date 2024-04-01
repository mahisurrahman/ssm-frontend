import TitleAndSubtitle from "../../Components/TitleAndSubtitle/TitleAndSubtitle";

const CreateProduct = () => {
  return (
    <div className="px-4 py-2">
      <div className="py-4">
        <TitleAndSubtitle
          title={"Add Product"}
          subtitle={"Fill Up The Information with Precision"}
        ></TitleAndSubtitle>
      </div>
      <div className="w-10/12 mx-auto mt-5">
        <form>
          <div className="flex gap-2">
            <input
              className="mb-4 w-full py-4 px-4 text-2xl font-semibold tracking-widest rounded-lg bg-transparent text-yellow-400 border-2 border-[#3000C0] placeholder:text-sm"
              type="text"
              name="productName"
              placeholder="Product Name"
            />
            <input
              className="mb-4 w-full py-4 px-4 text-2xl font-semibold tracking-widest rounded-lg bg-transparent text-yellow-400 border-2 border-[#3000C0] placeholder:text-sm"
              type="text"
              name="productQuantity"
              placeholder="Product Quantity"
            />
          </div>
          <textarea
            className="mb-4 w-full py-4 px-4 text-lg font-semibold tracking-widest rounded-lg bg-transparent text-yellow-400 border-2 border-[#3000C0] placeholder:text-sm"
            type="text"
            name="productDescription"
            placeholder="Product Description"
          />
          <div className="flex gap-2">
            <input
              className="mb-4 w-full py-4 px-4 text-2xl font-semibold tracking-widest rounded-lg bg-transparent text-yellow-400 border-2 border-[#3000C0] placeholder:text-sm"
              type="text"
              name="productBuyingPrice"
              placeholder="Product Buying Price"
            />
            <input
              className="mb-4 w-full py-4 px-4 text-2xl font-semibold tracking-widest rounded-lg bg-transparent text-yellow-400 border-2 border-[#3000C0] placeholder:text-sm"
              type="text"
              name="productImageUrl"
              placeholder="Image URL"
            />
          </div>
          <div className="w-full mt-5">
            <input
              className="duration-700 w-full py-4 text-center bg-yellow-400 text-2xl rounded-lg text-[#000000] font-extrabold tracking-widest hover:bg-transparent hover:border hover:border-yellow-400 hover:text-yellow-400 hover:cursor-pointer hover:duration-700"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
