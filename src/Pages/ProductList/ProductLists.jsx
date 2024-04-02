import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./productLists.css";
import { Pagination } from "swiper/modules";
import TitleAndSubtitle from "../../Components/TitleAndSubtitle/TitleAndSubtitle";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { MdModeEdit } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import { Helmet } from "react-helmet";

const ProductLists = () => {
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

        <div className="h-[60vh]">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col items-start px-4">
                <img
                  src="https://shop.adarbepari.com/wp-content/uploads/2021/04/bangladesh-flag-cotton-tshirt.jpg"
                  alt=""
                />
                <div className="my-3 text-left">
                  <h1 className="font-semibold mb-2 text-sm">
                    Product Name:{" "}
                    <span className="text-[#A1CF58] font-extrabold">
                      T-Shirt
                    </span>
                  </h1>
                  <h1 className="font-semibold mb-2 text-sm">
                    Quantity Available:{" "}
                    <span className="text-[#A1CF58] font-extrabold">99</span>
                  </h1>
                  <h1 className="font-semibold mb-2 text-sm">
                    Product Price:{" "}
                    <span className="text-[#A1CF58] font-extrabold">10$</span>
                  </h1>
                  <h1 className="font-semibold mb-2 text-sm">
                    Status:{" "}
                    <span className="text-[#A1CF58] font-extrabold">10$</span>
                  </h1>
                </div>
                <div className="w-full flex justify-between items-center">
                  <button className="px-2 py-2 border-2 text-slate-100 border-[#186F65] bg-[#186F65] rounded-lg duration-700 font-bold  hover:border-slate-900 hover:bg-slate-900 hover:text-slate-100 hover:cursor-pointer hover:duration-700">
                    <HiMiniShoppingCart></HiMiniShoppingCart>
                  </button>
                  <button className="px-2 py-2 border-2 text-slate-100 border-[#7C93C3] rounded-lg duration-700 font-bold bg-[#7C93C3] hover:border-slate-900 hover:bg-slate-900 hover:text-slate-100 hover:cursor-pointer hover:duration-700">
                    <MdModeEdit></MdModeEdit>
                  </button>
                  <button className="px-2 py-2 border-2 text-slate-900 border-red-500 rounded-lg duration-700 font-bold bg-red-500 hover:border-slate-900 hover:bg-slate-900 hover:cursor-pointer hover:duration-700">
                    <AiTwotoneDelete className="text-slate-100"></AiTwotoneDelete>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-start px-4">
                <img
                  src="https://shop.adarbepari.com/wp-content/uploads/2021/04/bangladesh-flag-cotton-tshirt.jpg"
                  alt=""
                />
                <div className="my-3 text-left">
                  <h1 className="font-semibold mb-2 text-sm">
                    Product Name:{" "}
                    <span className="text-[#A1CF58] font-extrabold">
                      T-Shirt
                    </span>
                  </h1>
                  <h1 className="font-semibold mb-2 text-sm">
                    Quantity Available:{" "}
                    <span className="text-[#A1CF58] font-extrabold">99</span>
                  </h1>
                  <h1 className="font-semibold mb-2 text-sm">
                    Product Price:{" "}
                    <span className="text-[#A1CF58] font-extrabold">10$</span>
                  </h1>
                  <h1 className="font-semibold mb-2 text-sm">
                    Status:{" "}
                    <span className="text-[#A1CF58] font-extrabold">10$</span>
                  </h1>
                </div>
                <div className="w-full flex justify-between items-center">
                  <button className="px-2 py-2 border-2 text-slate-100 border-[#186F65] bg-[#186F65] rounded-lg duration-700 font-bold  hover:border-slate-900 hover:bg-slate-900 hover:text-slate-100 hover:cursor-pointer hover:duration-700">
                    <HiMiniShoppingCart></HiMiniShoppingCart>
                  </button>
                  <button className="px-2 py-2 border-2 text-slate-100 border-[#7C93C3] rounded-lg duration-700 font-bold bg-[#7C93C3] hover:border-slate-900 hover:bg-slate-900 hover:text-slate-100 hover:cursor-pointer hover:duration-700">
                    <MdModeEdit></MdModeEdit>
                  </button>
                  <button className="px-2 py-2 border-2 text-slate-900 border-red-500 rounded-lg duration-700 font-bold bg-red-500 hover:border-slate-900 hover:bg-slate-900 hover:cursor-pointer hover:duration-700">
                    <AiTwotoneDelete className="text-slate-100"></AiTwotoneDelete>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-start px-4">
                <img
                  src="https://shop.adarbepari.com/wp-content/uploads/2021/04/bangladesh-flag-cotton-tshirt.jpg"
                  alt=""
                />
                <div className="my-3 text-left">
                  <h1 className="font-semibold mb-2 text-sm">
                    Product Name:{" "}
                    <span className="text-[#A1CF58] font-extrabold">
                      T-Shirt
                    </span>
                  </h1>
                  <h1 className="font-semibold mb-2 text-sm">
                    Quantity Available:{" "}
                    <span className="text-[#A1CF58] font-extrabold">99</span>
                  </h1>
                  <h1 className="font-semibold mb-2 text-sm">
                    Product Price:{" "}
                    <span className="text-[#A1CF58] font-extrabold">10$</span>
                  </h1>
                  <h1 className="font-semibold mb-2 text-sm">
                    Status:{" "}
                    <span className="text-[#A1CF58] font-extrabold">10$</span>
                  </h1>
                </div>
                <div className="w-full flex justify-between items-center">
                  <button className="px-2 py-2 border-2 text-slate-100 border-[#186F65] bg-[#186F65] rounded-lg duration-700 font-bold  hover:border-slate-900 hover:bg-slate-900 hover:text-slate-100 hover:cursor-pointer hover:duration-700">
                    <HiMiniShoppingCart></HiMiniShoppingCart>
                  </button>
                  <button className="px-2 py-2 border-2 text-slate-100 border-[#7C93C3] rounded-lg duration-700 font-bold bg-[#7C93C3] hover:border-slate-900 hover:bg-slate-900 hover:text-slate-100 hover:cursor-pointer hover:duration-700">
                    <MdModeEdit></MdModeEdit>
                  </button>
                  <button className="px-2 py-2 border-2 text-slate-900 border-red-500 rounded-lg duration-700 font-bold bg-red-500 hover:border-slate-900 hover:bg-slate-900 hover:cursor-pointer hover:duration-700">
                    <AiTwotoneDelete className="text-slate-100"></AiTwotoneDelete>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-start px-4">
                <img
                  src="https://shop.adarbepari.com/wp-content/uploads/2021/04/bangladesh-flag-cotton-tshirt.jpg"
                  alt=""
                />
                <div className="my-3 text-left">
                  <h1 className="font-semibold mb-2 text-sm">
                    Product Name:{" "}
                    <span className="text-[#A1CF58] font-extrabold">
                      T-Shirt
                    </span>
                  </h1>
                  <h1 className="font-semibold mb-2 text-sm">
                    Quantity Available:{" "}
                    <span className="text-[#A1CF58] font-extrabold">99</span>
                  </h1>
                  <h1 className="font-semibold mb-2 text-sm">
                    Product Price:{" "}
                    <span className="text-[#A1CF58] font-extrabold">10$</span>
                  </h1>
                  <h1 className="font-semibold mb-2 text-sm">
                    Status:{" "}
                    <span className="text-[#A1CF58] font-extrabold">10$</span>
                  </h1>
                </div>
                <div className="w-full flex justify-between items-center">
                  <button className="px-2 py-2 border-2 text-slate-100 border-[#186F65] bg-[#186F65] rounded-lg duration-700 font-bold  hover:border-slate-900 hover:bg-slate-900 hover:text-slate-100 hover:cursor-pointer hover:duration-700">
                    <HiMiniShoppingCart></HiMiniShoppingCart>
                  </button>
                  <button className="px-2 py-2 border-2 text-slate-100 border-[#7C93C3] rounded-lg duration-700 font-bold bg-[#7C93C3] hover:border-slate-900 hover:bg-slate-900 hover:text-slate-100 hover:cursor-pointer hover:duration-700">
                    <MdModeEdit></MdModeEdit>
                  </button>
                  <button className="px-2 py-2 border-2 text-slate-900 border-red-500 rounded-lg duration-700 font-bold bg-red-500 hover:border-slate-900 hover:bg-slate-900 hover:cursor-pointer hover:duration-700">
                    <AiTwotoneDelete className="text-slate-100"></AiTwotoneDelete>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-start px-4">
                <img
                  src="https://shop.adarbepari.com/wp-content/uploads/2021/04/bangladesh-flag-cotton-tshirt.jpg"
                  alt=""
                />
                <div className="my-3 text-left">
                  <h1 className="font-semibold mb-2 text-sm">
                    Product Name:{" "}
                    <span className="text-[#A1CF58] font-extrabold">
                      T-Shirt
                    </span>
                  </h1>
                  <h1 className="font-semibold mb-2 text-sm">
                    Quantity Available:{" "}
                    <span className="text-[#A1CF58] font-extrabold">99</span>
                  </h1>
                  <h1 className="font-semibold mb-2 text-sm">
                    Product Price:{" "}
                    <span className="text-[#A1CF58] font-extrabold">10$</span>
                  </h1>
                  <h1 className="font-semibold mb-2 text-sm">
                    Status:{" "}
                    <span className="text-[#A1CF58] font-extrabold">10$</span>
                  </h1>
                </div>
                <div className="w-full flex justify-between items-center">
                  <button className="px-2 py-2 border-2 text-slate-100 border-[#186F65] bg-[#186F65] rounded-lg duration-700 font-bold  hover:border-slate-900 hover:bg-slate-900 hover:text-slate-100 hover:cursor-pointer hover:duration-700">
                    <HiMiniShoppingCart></HiMiniShoppingCart>
                  </button>
                  <button className="px-2 py-2 border-2 text-slate-100 border-[#7C93C3] rounded-lg duration-700 font-bold bg-[#7C93C3] hover:border-slate-900 hover:bg-slate-900 hover:text-slate-100 hover:cursor-pointer hover:duration-700">
                    <MdModeEdit></MdModeEdit>
                  </button>
                  <button className="px-2 py-2 border-2 text-slate-900 border-red-500 rounded-lg duration-700 font-bold bg-red-500 hover:border-slate-900 hover:bg-slate-900 hover:cursor-pointer hover:duration-700">
                    <AiTwotoneDelete className="text-slate-100"></AiTwotoneDelete>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-start px-4">
                <img
                  src="https://shop.adarbepari.com/wp-content/uploads/2021/04/bangladesh-flag-cotton-tshirt.jpg"
                  alt=""
                />
                <div className="my-3 text-left">
                  <h1 className="font-semibold mb-2 text-sm">
                    Product Name:{" "}
                    <span className="text-[#A1CF58] font-extrabold">
                      T-Shirt
                    </span>
                  </h1>
                  <h1 className="font-semibold mb-2 text-sm">
                    Quantity Available:{" "}
                    <span className="text-[#A1CF58] font-extrabold">99</span>
                  </h1>
                  <h1 className="font-semibold mb-2 text-sm">
                    Product Price:{" "}
                    <span className="text-[#A1CF58] font-extrabold">10$</span>
                  </h1>
                  <h1 className="font-semibold mb-2 text-sm">
                    Status:{" "}
                    <span className="text-[#A1CF58] font-extrabold">10$</span>
                  </h1>
                </div>
                <div className="w-full flex justify-between items-center">
                  <button className="px-2 py-2 border-2 text-slate-100 border-[#186F65] bg-[#186F65] rounded-lg duration-700 font-bold  hover:border-slate-900 hover:bg-slate-900 hover:text-slate-100 hover:cursor-pointer hover:duration-700">
                    <HiMiniShoppingCart></HiMiniShoppingCart>
                  </button>
                  <button className="px-2 py-2 border-2 text-slate-100 border-[#7C93C3] rounded-lg duration-700 font-bold bg-[#7C93C3] hover:border-slate-900 hover:bg-slate-900 hover:text-slate-100 hover:cursor-pointer hover:duration-700">
                    <MdModeEdit></MdModeEdit>
                  </button>
                  <button className="px-2 py-2 border-2 text-slate-900 border-red-500 rounded-lg duration-700 font-bold bg-red-500 hover:border-slate-900 hover:bg-slate-900 hover:cursor-pointer hover:duration-700">
                    <AiTwotoneDelete className="text-slate-100"></AiTwotoneDelete>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductLists;
