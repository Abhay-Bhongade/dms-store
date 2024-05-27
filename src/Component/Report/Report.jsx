import React, { useState, useEffect } from "react";
import axios from "axios";
import SectionHeading from "./SectionHeading";
import DataRow from "./DataRow";
import Card from "./Card";
import "../Styles/Report.css";
import "../Styles/CustomerScoreCard.css";
import Chart from "../Charts/Chart";
import { API, config } from "../../Services/index";
import moment from "moment";
import { DateFilterModal } from "../UIElements/index";
import calenderIcon from "../../assets/Calendar.svg";

const Report = () => {
  const [fetchedData, setFetchData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(moment());

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleFilter = (filterData) => {
    const { year, month } = filterData;
    setCurrentDate(moment({ year, month: month - 1 }));
    fetchData({ year, month });
  };

  const fetchData = async ({ year, month }) => {
    const payload = {
      distributor_id: 1168,
      year: year,
      month: moment()
        .month(month - 1)
        .format("MMMM"),
    };

    try {
      const res = await axios.post(API, payload, config);
      setFetchData(res?.data?.data);
      console.log("res", res);
    } catch (error) {
      console.log("error while fetching data", error);
    }
  };

  useEffect(() => {
    fetchData({ year: currentDate.year(), month: currentDate.month() + 1 });
  }, []);

  const data = [
    {
      id: 1,
      mainHeading: "Escalations",
      bodyContent: "Escalations Counting",
      DynamicValue: 80,
    },
    {
      id: 2,
      mainHeading: "Inventory",
      bodyContent: "Available OB Stock Value",
      DynamicValue: "₹6,00,000",
    },
    {
      id: 3,
      mainHeading: "Primary billing",
      bodyContent: "Pvt Label Contribution",
      DynamicValue: "96.03%",
    },
    {
      id: 4,
      mainHeading: "Counter Sale",
      bodyContent: "Sale Amount",
      DynamicValue: "₹1,00,000",
    },
  ];

  const score = 4.8;

  console.log("fetchedData", fetchedData);

  const payload ={
    distributor_id: 55,
    year: currentDate.year(),
    month: currentDate.month() + 1
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <div className="mb-2">
            <div className="your-score-heading text-center">Your Score</div>
            <div className="your-score text-center">{fetchedData?.score}</div>
          </div>
          <div className="content-in-center">
            <Chart score={fetchedData?.score} />
          </div>
        </div>
      </div>
      <div className="row my-2">
        <div className="card">
          <div className="card-body">
            <div
              className="d-flex justify-content-start align-items-center p-2"
              onClick={handleOpen}
              style={{ cursor: "pointer", flexDirection: "row" }}
            >
              <div className="calender-content">
                {currentDate.format("MMMM")}
              </div>
              <div className="ms-2 me-3 calender-content">
                {currentDate.format("YYYY")}
              </div>
              <div>
                <img src={calenderIcon} alt="calendar icon" />
              </div>
            </div>
          </div>
        </div>

        <DateFilterModal
          open={isModalOpen}
          handleClose={handleClose}
          handleFilter={handleFilter}
        />
      </div>
      <div className="row">
        <div className="col-md-12">
          <Card title="Delivery">
            <SectionHeading heading="Beats" />
            <div className="row d-flex">
              <DataRow
                label="Ordered"
                value="18"
                additionalClass="ms-2 me-1 hover"
                to="/beats-orders-table"
                type="beats"
                type_value="1"
                payload={payload}
              />
              <DataRow
                label="Delivered"
                value="15"
                additionalClass="ms-1 me-2 hover"
                to="/beats-delivered-table"
                type="beats"
                type_value="2"
                payload={payload}
              />
            </div>
            <div className="row d-flex my-2">
              <DataRow
                label="Rejected"
                value="2"
                additionalClass="ms-2 me-1 hover"
                to="/beats-rejected-table"
                type="beats"
                type_value="3"
                payload={payload}
              />
              <DataRow
                label="Pending"
                value="3"
                additionalClass="pending-bg ms-1 me-2 hover"
                to="/beats-pending-table"
                type="beats"
                type_value="4"
                payload={payload}
              />
            </div>

            <SectionHeading heading="Orders" />
            <div className="row d-flex">
              <DataRow
                label="Total"
                value="90"
                additionalClass="ms-2 me-1 hover"
                to="/orders-total-table"
                type="orders"
                type_value="1"
                payload={payload}
              />
              <DataRow
                label="Accepted"
                value="80"
                additionalClass="ms-1 me-2 hover"
                to="/orders-accepted-table"
                type="orders"
                type_value="2"
                payload={payload}
              />
            </div>
            <div className="row my-2">
              <DataRow
                label="Rejected"
                value="5"
                additionalClass="ms-2 me-1 hover"
                to="/orders-rejected-table"
                type="orders"
                type_value="3"
                payload={payload}
              />
              <DataRow
                label="Pending"
                value="5"
                additionalClass="pending-bg ms-1 me-2 hover"
                to="/orders-pending-table"
                type="orders"
                type_value="4"
                payload={payload}
              />
            </div>

            <SectionHeading heading="Amount" />
            <div className="row">
              <DataRow
                label="Ordered - Rs 6,00,000"
                value=""
                additionalClass="mb-2 mx-2 py-3"
              />
            </div>
            <div className="row my-2">
              <DataRow
                label="Delivered"
                value="₹5,90,000"
                additionalClass="ms-2 me-1"
              />
              <DataRow
                label="Delivery %"
                value="98.3%"
                additionalClass="delivery-bg ms-1 me-2"
              />
            </div>
          </Card>
        </div>

        <div className="col-md-12">
          {data.map((item) => (
            <Card title={item.mainHeading} key={item.id}>
              <div className="content-center card-content">
                {item.bodyContent} - {item.DynamicValue}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Report;
