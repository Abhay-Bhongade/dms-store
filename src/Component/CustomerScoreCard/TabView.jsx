import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import StatisticCard from "./StatisticCard";
import ReusableTable from "./ReusableTable";
import "../../Component/Styles/CustomerScoreCard.css";
import {
  Public as PublicIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  LocalShipping as LocalShippingIcon,
  ViewInAr as ViewInArIcon,
  Sell as SellIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
  Call as CallIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const TabView = () => {
  const [key, setKey] = useState("delivery");
  const iconStyle = { color: "white" };
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        fill="true"
      >
        <Tab eventKey="delivery" title="Delivery" fill="true">
          {key === "delivery" && (
            <>
              <div className="row row-flex">
                <div className="col-6 col-flex">
                  <StatisticCard
                    title="Total District"
                    value="23"
                    icon={
                      <PublicIcon sx={{ fontSize: 16 }} style={iconStyle} />
                    }
                    onClick={() => handleNavigate("/total-district-table")}
                    className="statistic-card"
                    additionalClass="d-total-district-bg"
                    header={true}
                  />
                </div>
                <div className="col-6 col-flex">
                  <StatisticCard
                    title="Total Beat"
                    value="23"
                    icon={
                      <SearchIcon sx={{ fontSize: 16 }} style={iconStyle} />
                    }
                    onClick={() => handleNavigate("/total-beats-table")}
                    className="statistic-card"
                    additionalClass="d-total-order-amt-bg"
                    header={true}
                  />
                </div>
              </div>
              <div className="row row-flex">
                <div className="col-6 col-flex">
                  <StatisticCard
                    title="Total Order Amount"
                    value="117,668.44"
                    icon={
                      <ShoppingCartIcon
                        sx={{ fontSize: 16 }}
                        style={iconStyle}
                      />
                    }
                    className="statistic-card"
                    additionalClass="d-total-order-amt-bg"
                    header={true}
                  />
                </div>
                <div className="col-6 col-flex">
                  <StatisticCard
                    title="Total Delivery Amount"
                    value="1,591.26"
                    icon={
                      <LocalShippingIcon
                        sx={{ fontSize: 16 }}
                        style={iconStyle}
                      />
                    }
                    className="statistic-card"
                    additionalClass="d-total-delivery-amt-bg"
                    header={true}
                  />
                </div>
              </div>
              <div className="row row-flex">
                <div className="col-12 col-flex">
                  <StatisticCard
                    title="Total Delivery Percentage"
                    value="1.35%"
                    icon={
                      <ViewInArIcon sx={{ fontSize: 16 }} style={iconStyle} />
                    }
                    className="statistic-card"
                    additionalClass="d-total-delivery-percntg-bg "
                    header={true}
                  />
                </div>
              </div>
            </>
          )}
        </Tab>
        <Tab eventKey="escalation" title="Escalation" fill="true">
          {key === "escalation" && (
            <>
              <div className="row row-flex">
                <div className="col col-flex">
                  <StatisticCard
                    title="Total Escalation Count"
                    value="27"
                    icon={<SellIcon sx={{ fontSize: 16 }} style={iconStyle} />}
                    onClick={() => handleNavigate("/escalation-count-table")}
                    className="statistic-card"
                    additionalClass="e-total-escal-count-bg"
                    header={true}
                  />
                </div>
              </div>
              <div className="row row-flex">
                <div className="col-6 col-flex">
                  <StatisticCard
                    title="Positive Escalation Count"
                    value="7"
                    icon={<AddIcon sx={{ fontSize: 16 }} style={iconStyle} />}
                    onClick={() => handleNavigate("/positive-escalation-table")}
                    className="statistic-card"
                    additionalClass="e-postv-escal-count-bg"
                    header={true}
                  />
                </div>
                <div className="col-6 col-flex">
                  <StatisticCard
                    title="Negative Escalation Count"
                    value="20"
                    icon={
                      <RemoveIcon sx={{ fontSize: 16 }} style={iconStyle} />
                    }
                    onClick={() => handleNavigate("/negative-escalation-table")}
                    className="statistic-card"
                    additionalClass="e-negtv-escal-count-bg"
                    header={true}
                  />
                </div>
              </div>
            </>
          )}
        </Tab>
        <Tab eventKey="callingDay" title="Calling Day" fill="true">
          {key === "callingDay" && (
            <>
              <div className="row row-flex">
                <div className="col-6 col-flex">
                  <StatisticCard
                    title="Total Calling Day"
                    value="7"
                    icon={<CallIcon sx={{ fontSize: 16 }} style={iconStyle} />}
                    className="statistic-card"
                    additionalClass="total-calling-bg"
                    header={true}
                  />
                </div>
                <div className="col-6 col-flex">
                  <StatisticCard
                    title="Active Calling Day"
                    value="20"
                    icon={<CallIcon sx={{ fontSize: 16 }} style={iconStyle} />}
                    className="statistic-card"
                    additionalClass="active-calling-bg"
                    header={true}
                  />
                </div>
              </div>
            </>
          )}
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabView;
