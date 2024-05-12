import React, { useEffect, useState } from "react";
import useRequest from "../../apiService/useRequest";
import Loading from "../../Components/Loading/Loading";
import TitleAndSubtitle from "../../Components/TitleAndSubtitle/TitleAndSubtitle";

const Receipts = () => {
  const [allReceipts, setAllReceipts] = useState([]);
  const [postRequest, getRequest] = useRequest();
  const [loading, setLoading] = useState(true);

//   if (loading === true) {
//     <Loading></Loading>;
//   }

  const fetchReceipts = async () => {
    let receiptDetails = await getRequest("/receipts/src");
    setAllReceipts(receiptDetails?.data?.data);
    setLoading(false);
};

// console.log(allReceipts);
// allReceipts.map(item => console.log(item.soldProducts[0]));

  useEffect(() => {
    fetchReceipts();
  }, []);

  
  return <div>{loading === true ? <Loading></Loading> : <div className="px-10 py-6">
        <TitleAndSubtitle title={"All Receipts"} subtitle={"Download Your Desire Receipts From Here"}></TitleAndSubtitle>
        <div className="mt-5 grid grid-cols-4 gap-10 overflow-y-auto max-h-[600px]">
            {
                allReceipts.map(item => <div key={item.soldProducts[0]._id} className="card w-80 h-60 bg-white shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-slate-900 font-extrabold">{item.soldProducts[0].productName}</h2>
                  <p className="text-slate font-bold">Price:  <span className="font-normal">{item.soldProducts[0].sellingPrice}</span>$</p>
                </div>
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              </div>)
            }
        </div>
    </div>}</div>;
};

export default Receipts;
