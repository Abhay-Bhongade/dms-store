import React from "react";

import CommonTableScoreCard from "../../UIElements/Table/CommonTableScoreCard";

const TotalBeat = () => {
  const tabledata = [
    {
      sno: 1,
      districtList: "Agar",
      orderAmount: "₹10460.48",
      deliveryAmount: "11000.00",
      deliveryPercentage: "10",
    },
    {
      sno: 2,
      districtList: "Barwani",
      orderAmount: "₹97.12",
      deliveryAmount: "11000.00",
      deliveryPercentage: "10",
    },
    {
      sno: 3,
      districtList: "Agar",
      orderAmount: "₹10460.48",
      deliveryAmount: "11000.00",
      deliveryPercentage: "10",
    },
    {
      sno: 4,
      districtList: "Barwani",
      orderAmount: "₹97.12",
      deliveryAmount: "11000.00",
      deliveryPercentage: "10",
    },
    {
      sno: 5,
      districtList: "Agar",
      orderAmount: "₹10460.48",
      deliveryAmount: "11000.00",
      deliveryPercentage: "10",
    },
    {
      sno: 6,
      districtList: "Barwani",
      orderAmount: "₹97.12",
      deliveryAmount: "11000.00",
      deliveryPercentage: "10",
    },
    {
      sno: 7,
      districtList: "Agar",
      orderAmount: "₹10460.48",
      deliveryAmount: "11000.00",
      deliveryPercentage: "10",
    },
    {
      sno: 8,
      districtList: "Barwani",
      orderAmount: "₹97.12",
      deliveryAmount: "11000.00",
      deliveryPercentage: "10",
    },
    {
      sno: 9,
      districtList: "Agar",
      orderAmount: "₹10460.48",
      deliveryAmount: "11000.00",
      deliveryPercentage: "10",
    },
    {
      sno: 10,
      districtList: "Barwani",
      orderAmount: "₹97.12",
      deliveryAmount: "11000.00",
      deliveryPercentage: "10",
    },
    {
      sno: 11,
      districtList: "Agar",
      orderAmount: "₹10460.48",
      deliveryAmount: "11000.00",
      deliveryPercentage: "10",
    },
    {
      sno: 12,
      districtList: "Barwani",
      orderAmount: "₹97.12",
      deliveryAmount: "11000.00",
      deliveryPercentage: "10",
    },
    {
      sno: 13,
      districtList: "Agar",
      orderAmount: "₹10460.48",
      deliveryAmount: "11000.00",
      deliveryPercentage: "10",
    },
    {
      sno: 14,
      districtList: "Barwani",
      orderAmount: "₹97.12",
      deliveryAmount: "11000.00",
      deliveryPercentage: "10",
    },
    {
      sno: 15,
      districtList: "Agar",
      orderAmount: "₹10460.48",
      deliveryAmount: "11000.00",
      deliveryPercentage: "10",
    },
  ];

  const columns = [
    { label: "S.No", field: "sno" },
    { label: "District List", field: "districtList" },
    { label: "Order Amount", field: "orderAmount" },
    { label: "Delivery Amount", field: "deliveryAmount" },
    { label: "Delivery Percentage", field: "deliveryPercentage" },
  ];

  return (
    <div className="container-fluid p-0 m-0">
      <div className="row">
        <div className="col-md-12">
          <CommonTableScoreCard
            columns={columns}
            tabledata={tabledata}
            tableheading="Beat"
          />
        </div>
      </div>
    </div>
  );
};

export default TotalBeat;
