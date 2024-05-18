import React from 'react';

const ReceiptsDetails = ({ isOpen, onClose, receipt }) => {
  if (!isOpen || !receipt) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Receipt Details</h2>
        <p className="text-slate font-bold">Receipt {String(receipt.serialNumber).padStart(2, '0')}</p>
        <p className="text-slate font-bold">
          Product Name: <span className="font-normal">{receipt.soldProducts[0].productName}</span>
        </p>
        <p className="text-slate font-bold">
          Quantity: <span className="font-normal">{receipt.soldProducts[0].quantitySold}</span>
        </p>
        <p className="text-slate font-bold">
          Total Cost: <span className="font-normal">{receipt.soldProducts[0].sellingPrice * receipt.soldProducts[0].quantitySold}</span> $
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ReceiptsDetails;
