import React from "react";
import TabView from "./TabView";
import StatisticCard from "./StatisticCard";
import {
  FilterAltOutlined as FilterAltOutlinedIcon,
  ArrowBackIosNew as ArrowBackIosNewIcon,
  Public as PublicIcon,
  Home as HomeIcon,
  LocalShipping as LocalShippingIcon,
  ViewInAr as ViewInArIcon,
  Sell as SellIcon,
} from "@mui/icons-material";
import { MainHeading, CommonButton } from "../UIElements";
import Card from "react-bootstrap/Card";
import GuageChart from "../Charts/GuageChart";
import filterIcon from "../../assets/Filter.svg";
import backIcon from "../../assets/back.svg";

const CustomerScoreCard = () => {
  const handleClick = (title) => {
    console.log(`${title} card clicked`);
  };

  const score = 5.8;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="content-space-between mt-2 py-1">
            <CommonButton
              icon={<img src={backIcon} alt="filter icon" />}
              additionalClass="btn btn-outline-dark border-0 custom-hover ml-n1rem"
              goBack={true}
            />
            <MainHeading
              heading="Customer Score Card"
              additionalClass="py-2 your-score-heading text-center customer-score-card-heading"
            />
            <CommonButton
              icon={<img src={filterIcon} alt="filter icon" />}
              additionalClass="btn btn-outline-dark border-0 custom-hover mr-neg"
              goBack={true}
            />
          </div>

          <Card
            className="card-shadow statistic-card mt-2 mb-3"
            style={{ cursor: "pointer" }}
          >
            <div className="row">
              <div className="col-6">
                <StatisticCard
                  title="Total Score"
                  value="4.8/10"
                  icon={<HomeIcon sx={{ fontSize: 16 }} />}
                  onClick={() => handleClick("Total Score")}
                  className="statistic-card"
                  additionalClass="d-total-district-bg "
                  header={false}
                  titleClass=""
                />

                <StatisticCard
                  title="Delivery Score"
                  value="0.7/5"
                  icon={<LocalShippingIcon sx={{ fontSize: 16 }} />}
                  onClick={() => handleClick("Delivery Score")}
                  className="statistic-card"
                  additionalClass="delivery-score-bg"
                  header={false}
                />
                <StatisticCard
                  title="Escalation Tag Score"
                  value="1.30/5"
                  icon={<SellIcon sx={{ fontSize: 16 }} />}
                  onClick={() => handleClick("Escalation Tag Score")}
                  className="statistic-card"
                  additionalClass="escalation-tag-score"
                  header={false}
                />
              </div>
              <div className="col-6 content-in-center pe-5">
                <GuageChart score={score} />
              </div>
            </div>
          </Card>
          <TabView />
        </div>
      </div>
    </div>
  );
};

export default CustomerScoreCard;
