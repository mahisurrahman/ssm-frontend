import React, { useEffect, useState } from "react";
import TitleAndSubtitle from "../../Components/TitleAndSubtitle/TitleAndSubtitle";
import useRequest from "../../apiService/useRequest";
import Loading from "../../Components/Loading/Loading";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const DailySalesReport = () => {
  const [allReports, setAllReports] = useState([]);
  const [postRequest, getRequest] = useRequest();
  const [loading, setLoading] = useState(true);

  const fetchAllReports = async () => {
    let results = await getRequest("/daily-report/src");
    setAllReports(results?.data?.data);
    setLoading(false);
  };

  console.log(allReports?.data?.data);

  useEffect(() => {
    fetchAllReports();
  }, []);

  return (
    <div className="py-4">
      {loading ? (
        <Loading></Loading>
      ) : (
        <div>
          <TitleAndSubtitle
            title={"All the Daily Sales"}
            subtitle={"Checkout all the ins and outs of the past 24 hours"}
          ></TitleAndSubtitle>
          <div className="mt-5 px-10">
            <div className="overflow-x-auto">
              <div className="table-container">
                <table className="table table-zebra bg-transparent">
                  <thead className="text-slate-900 text-sm">
                    <tr>
                      <th>Product Name</th>
                      <th>Product Id</th>
                      <th>Total Buying Price</th>
                      <th>Total Selling Price</th>
                      <th>Total Profit</th>
                      <th>Total Loss</th>
                      <th>Total Quantity Sold</th>
                      <th className="text-green-400">Active</th>
                      <th className="text-red-400">Deleted</th>
                    </tr>
                  </thead>
                  {allReports.map((report) => (
                    <tbody
                      key={report._id}
                      className="bg-transparent border-2 border-slate-900"
                    >
                      <tr className="">
                       <td>{report.productName}</td>
                       <td>{report.productId}</td>
                       <td>{report.totalBuyingPrice}$</td>
                       <td>{report.totalSellingPrice}$</td>
                       <td>{report.totalProfit}$</td>
                       <td>{report.totalLoss}$</td>
                       <td>{report.totalQuantitySold}</td>
                       <td>{report?.isActive ? <TiTick className="text-xl"></TiTick>: <ImCross></ImCross>}</td>
                       <td>{report?.isDeleted ? <TiTick className="text-xl"></TiTick>:<ImCross></ImCross>}</td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailySalesReport;
