import React from "react";

import CommonTableScoreCard from "../../UIElements/Table/CommonTableScoreCard";

const TotalNegativeEscalationCount = () => {
  const tabledata = [
    {
      sno: 1,
      date: "2024-05-17",
      retailerCode: "RR-00267",
      retailerName: "AJ Bakery",
      escalationTag:
        "Full Delivery Failure , Partial delivery failure , Rate / Credit / Coin issue , Does not know about service , Replacement - Damage / New / Wrong Product",
      status: "Order",
    },
    {
      sno: 2,
      date: "2024-05-18",
      retailerCode: "RR-00262",
      retailerName: "AJ Bakery",
      escalationTag:
        "Full Delivery Failure , Partial delivery failure , Rate / Credit / Coin issue , Does not know about service , Replacement - Damage / New / Wrong Product",
      status: "Order",
    },
    {
      sno: 3,
      date: "2024-05-17",
      retailerCode: "RR-00267",
      retailerName: "AJ Bakery",
      escalationTag:
        "Full Delivery Failure , Partial delivery failure , Rate / Credit / Coin issue , Does not know about service , Replacement - Damage / New / Wrong Product",
      status: "Order",
    },
    {
      sno: 4,
      date: "2024-05-18",
      retailerCode: "RR-00262",
      retailerName: "AJ Bakery",
      escalationTag:
        "Full Delivery Failure , Partial delivery failure , Rate / Credit / Coin issue , Does not know about service , Replacement - Damage / New / Wrong Product",
      status: "no-order",
    },
    {
      sno: 5,
      date: "2024-05-17",
      retailerCode: "RR-00267",
      retailerName: "AJ Bakery",
      escalationTag:
        "Full Delivery Failure , Partial delivery failure , Rate / Credit / Coin issue , Does not know about service , Replacement - Damage / New / Wrong Product",
      status: "order-call-back",
    },
    {
      sno: 6,
      date: "2024-05-18",
      retailerCode: "RR-00262",
      retailerName: "AJ Bakery",
      escalationTag:
        "Full Delivery Failure , Partial delivery failure , Rate / Credit / Coin issue , Does not know about service , Replacement - Damage / New / Wrong Product",
      status: "Order",
    },
    {
      sno: 7,
      date: "2024-05-17",
      retailerCode: "RR-00267",
      retailerName: "AJ Bakery",
      escalationTag:
        "Full Delivery Failure , Partial delivery failure , Rate / Credit / Coin issue , Does not know about service , Replacement - Damage / New / Wrong Product",
      status: "order-call-back",
    },
    {
      sno: 8,
      date: "2024-05-18",
      retailerCode: "RR-00262",
      retailerName: "AJ Bakery",
      escalationTag:
        "Full Delivery Failure , Partial delivery failure , Rate / Credit / Coin issue , Does not know about service , Replacement - Damage / New / Wrong Product",
      status: "Order",
    },
    {
      sno: 9,
      date: "2024-05-17",
      retailerCode: "RR-00267",
      retailerName: "AJ Bakery",
      escalationTag:
        "Full Delivery Failure , Partial delivery failure , Rate / Credit / Coin issue , Does not know about service , Replacement - Damage / New / Wrong Product",
      status: "Order",
    },
    {
      sno: 10,
      date: "2024-05-18",
      retailerCode: "RR-00262",
      retailerName: "AJ Bakery",
      escalationTag:
        "Full Delivery Failure , Partial delivery failure , Rate / Credit / Coin issue , Does not know about service , Replacement - Damage / New / Wrong Product",
      status: "no-order",
    },
    {
      sno: 11,
      date: "2024-05-17",
      retailerCode: "RR-00267",
      retailerName: "AJ Bakery",
      escalationTag:
        "Full Delivery Failure , Partial delivery failure , Rate / Credit / Coin issue , Does not know about service , Replacement - Damage / New / Wrong Product",
      status: "Order",
    },
    {
      sno: 12,
      date: "2024-05-18",
      retailerCode: "RR-00262",
      retailerName: "AJ Bakery",
      escalationTag:
        "Full Delivery Failure , Partial delivery failure , Rate / Credit / Coin issue , Does not know about service , Replacement - Damage / New / Wrong Product",
      status: "Order",
    },
    {
      sno: 13,
      date: "2024-05-17",
      retailerCode: "RR-00267",
      retailerName: "AJ Bakery",
      escalationTag:
        "Full Delivery Failure , Partial delivery failure , Rate / Credit / Coin issue , Does not know about service , Replacement - Damage / New / Wrong Product",
      status: "Order",
    },
    {
      sno: 14,
      date: "2024-05-18",
      retailerCode: "RR-00262",
      retailerName: "AJ Bakery",
      escalationTag:
        "Full Delivery Failure , Partial delivery failure , Rate / Credit / Coin issue , Does not know about service , Replacement - Damage / New / Wrong Product",
      status: "order-call-back",
    },
    {
      sno: 15,
      date: "2024-05-17",
      retailerCode: "RR-00267",
      retailerName: "AJ Bakery",
      escalationTag:
        "Full Delivery Failure , Partial delivery failure , Rate / Credit / Coin issue , Does not know about service , Replacement - Damage / New / Wrong Product",
      status: "Order",
    },
  ];

  const columns = [
    { label: "S.No", field: "sno" },
    { label: "Date", field: "date" },
    { label: "Retailer Code", field: "retailerCode" },
    { label: "Retailer Name", field: "retailerName" },
    { label: "Escalation Tag", field: "escalationTag" },
    { label: "Status", field: "status" },
  ];

  return (
    <div className="container-fluid p-0 m-0">
      <div className="row">
        <div className="col-md-12">
          <CommonTableScoreCard
            columns={columns}
            tabledata={tabledata}
            tableheading="Negative Escalation Count"
          />
        </div>
      </div>
    </div>
  );
};

export default TotalNegativeEscalationCount;
