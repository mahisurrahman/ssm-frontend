import React from "react";

const ReceiptsDetails = ({ isOpen, onClose, receipt, setIsModalOpen }) => {
  if (!isOpen || !receipt) return null;

  const Print = () => {
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-lg">
              <h3 className="text-3xl font=semibold">Receipt Details</h3>
              <button
                className="bg-transparent border-0 text-black float-right"
                onClick={() => setIsModalOpen(false)}
              >
                <span className="mx-4 text-black opacity-7 h-8 w-8 text-xl block bg-gray-200 py-0 rounded-full">
                  x
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <h1 className="mb-5">Receipt Key: {receipt._id}</h1>
              <h1 className="text-xs">
                Invoice for: <br />
                <span className="text-lg italic">
                  {receipt.soldProducts[0].productName}
                </span>
              </h1>
              <h1 className="mb-2">{receipt.createdDate}</h1>
              <hr />
              <div className="flex justify-between mt-2">
                <p>Id:</p>
                <p>{receipt.soldProducts[0]._id}</p>
              </div>
              <div className="flex justify-between mt-2">
                <p>Quantity:</p>
                <p>{receipt.soldProducts[0].quantitySold}</p>
              </div>
              <div className="flex justify-between mt-2">
                <p>Selling Price:</p>
                <p>{receipt.soldProducts[0].sellingPrice} $</p>
              </div>
              <div className="flex justify-between mt-2">
                <p>Discount:</p>
                <p>0.00 $</p>
              </div>
              <hr />
              <div className="flex justify-between mt-2">
                <p className="text-xl font-bold">Total Price:</p>
                <p className="text-xl font-bold">{receipt.soldProducts[0].sellingPrice * receipt.soldProducts[0].quantitySold} $</p>
              </div>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceiptsDetails;
