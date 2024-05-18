import React, { useEffect, useState } from "react";
import useRequest from "../../apiService/useRequest";
import Loading from "../../Components/Loading/Loading";
import TitleAndSubtitle from "../../Components/TitleAndSubtitle/TitleAndSubtitle";
import ReceiptsDetails from "../ReceiptDetails/ReceiptDetails";

const Receipts = () => {
  const [allReceipts, setAllReceipts] = useState([]);
  const [postRequest, getRequest] = useRequest();
  const [loading, setLoading] = useState(true);
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchReceipts = async () => {
    let receiptDetails = await getRequest("/receipts/src");
    // Add a serial number to each receipt
    let receiptsWithSerialNumbers = receiptDetails?.data?.data.map((receipt, index) => ({
      ...receipt,
      serialNumber: index + 1,
    }));
    setAllReceipts(receiptsWithSerialNumbers);
    setLoading(false);
  };

  const handleViewClick = (receipt) => {
    setSelectedReceipt(receipt);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedReceipt(null);
  };

  useEffect(() => {
    fetchReceipts();
  }, []);

  return (
    <div>
      {loading === true ? (
        <Loading />
      ) : (
        <div className="px-10 py-6">
          <TitleAndSubtitle title="All Receipts" subtitle="Download Your Desire Receipts From Here" />
          <div className="mt-5 grid grid-cols-4 gap-20 overflow-y-auto max-h-[600px]">
            {allReceipts.map((item) => (
              <div key={item.soldProducts[0]._id} className="card w-72 h-80 bg-white">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Product"
                  />
                </figure>
                <div className="px-4 py-2 leading-6">
                  <small>{`Receipt ${String(item.serialNumber).padStart(2, '0')}`}</small>
                  <h2 className="mb-2 card-title text-slate-900 font-bold text-sm tracking-widest">
                    {item.soldProducts[0].productName}
                  </h2>
                  <p className="text-slate font-bold">
                    Quantity: <span className="font-normal">{item.soldProducts[0].quantitySold}</span>
                  </p>
                  <p className="text-slate font-bold">
                    Total Cost: <span className="font-normal">{item.soldProducts[0].sellingPrice * item.soldProducts[0].quantitySold}</span> $
                  </p>
                </div>
                <div className="flex justify-between items-center px-4 py-2">
                  <button
                    className="px-4 py-1 bg-green-400 text-slate-100 duration-700 hover:duration-700 hover:bg-green-600 font-poppins font-bold text-sm rounded-lg"
                    onClick={() => handleViewClick(item)}
                  >
                    View
                  </button>
                  <button className="px-4 py-1 bg-red-400 text-slate-100 duration-700 hover:duration-700 hover:bg-red-600 font-poppins font-bold text-sm rounded-lg">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <ReceiptsDetails
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            receipt={selectedReceipt}
          />
        </div>
      )}
    </div>
  );
};

export default Receipts;
