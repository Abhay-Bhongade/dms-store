import React from "react";
import CommonTableScoreCard from "../../UIElements/Table/CommonTableScoreCard";

const TotalOrdersAccepted = () => {
  const tabledata = [
    {
      sno: 1,
      beatsName: "Vijay Nagar",
      orderBookingDate: "2023-04-17",
      orderAmount: "₹10460.48",
      deliveryAmount: "11000.00",
    },
    {
      sno: 2,
      beatsName: "Nanda Nagar",
      orderBookingDate: "2023-04-17",
      orderAmount: "₹97.12",
      deliveryAmount: "11000.00",
    },
    {
      sno: 3,
      beatsName: "Vijay Nagar",
      orderBookingDate: "2023-04-17",
      orderAmount: "₹10460.48",
      deliveryAmount: "11000.00",
    },
    {
      sno: 4,
      beatsName: "Nanda Nagar",
      orderBookingDate: "2023-04-17",
      orderAmount: "₹97.12",
      deliveryAmount: "11000.00",
    },
    {
      sno: 5,
      beatsName: "Vijay Nagar",
      orderBookingDate: "2023-04-17",
      orderAmount: "₹10460.48",
      deliveryAmount: "11000.00",
    },
    {
      sno: 6,
      beatsName: "Nanda Nagar",
      orderBookingDate: "2023-04-17",
      orderAmount: "₹97.12",
      deliveryAmount: "11000.00",
    },
    {
      sno: 7,
      beatsName: "Vijay Nagar",
      orderBookingDate: "2023-04-17",
      orderAmount: "₹10460.48",
      deliveryAmount: "11000.00",
    },
    {
      sno: 8,
      beatsName: "Nanda Nagar",
      orderBookingDate: "2023-04-17",
      orderAmount: "₹97.12",
      deliveryAmount: "11000.00",
    },
    {
      sno: 9,
      beatsName: "Vijay Nagar",
      orderBookingDate: "2023-04-17",
      orderAmount: "₹10460.48",
      deliveryAmount: "11000.00",
    },
    {
      sno: 10,
      beatsName: "Nanda Nagar",
      orderBookingDate: "2023-04-17",
      orderAmount: "₹97.12",
      deliveryAmount: "11000.00",
    },
    {
      sno: 11,
      beatsName: "Vijay Nagar",
      orderBookingDate: "2023-04-17",
      orderAmount: "₹10460.48",
      deliveryAmount: "11000.00",
    },
    {
      sno: 12,
      beatsName: "Nanda Nagar",
      orderBookingDate: "2023-04-17",
      orderAmount: "₹97.12",
      deliveryAmount: "11000.00",
    },
    {
      sno: 13,
      beatsName: "Vijay Nagar",
      orderBookingDate: "2023-04-17",
      orderAmount: "₹10460.48",
      deliveryAmount: "11000.00",
    },
    {
      sno: 14,
      beatsName: "Nanda Nagar",
      orderBookingDate: "2023-04-17",
      orderAmount: "₹97.12",
      deliveryAmount: "11000.00",
    },
    {
      sno: 15,
      beatsName: "Vijay Nagar",
      orderBookingDate: "2023-04-17",
      orderAmount: "₹10460.48",
      deliveryAmount: "11000.00",
    },
  ];

  const columns = [
    { label: "S.No", field: "sno" },
    { label: "Beats Name", field: "beatsName" },
    { label: "Order Booking Date", field: "orderBookingDate" },
    { label: "Order Amount", field: "orderAmount" },
    { label: "Delivery Amount", field: "deliveryAmount" },
  ];

  return (
    <div className="container-fluid p-0 m-0">
      <div className="row">
        <div className="col-md-12">
          <CommonTableScoreCard
            columns={columns}
            tabledata={tabledata}
            tableheading="Accepted Orders"
          />
        </div>
      </div>
    </div>
  );
};

export default TotalOrdersAccepted;
