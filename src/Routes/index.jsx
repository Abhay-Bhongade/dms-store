// import Store from "./Component/Store/Store";
import LoginForm from "../Login";
import { Routes, Route } from "react-router-dom";
import {
  CustomerScoreCard,
  LazyCommanTable,
  LazyReportView,
  LazyStoreView,
  LazyStoreViewOnScroll,
  Store,
  LazyBeatsPendingTable,
  LazyBeatsOrdersTable,
  LazyBeatsDeliveredTable,
  LazyBeatsRejectedTable,
  LazyOrdersTotalTable,
  LazyOrdersAcceptedTable,
  LazyOrdersPendingTable,
  LazyOrdersRejectedTable,
  LazyDeliveryTotalBeatTable,
  LazyDeliveryTotalDistrictTable,
  LazyEscalationTotalCountTable,
  LazyPositiveEscalationCountTable,
  LazyNegativeEscalationCountTable,
} from "../Component";

import { NotFound } from "../Pages";

export default function RouteComponent() {
  const routesArr = [
    {
      path: "/",
      element: <Store />,
    },
    {
      path: "/store-view",
      element: <LoginForm />,
    },
    {
      path: "/store-view-scroll",
      element: <LazyStoreViewOnScroll />,
    },
    {
      path: "/report",
      element: <LazyReportView />,
    },
    {
      path: "/delivery",
      element: <LazyCommanTable />,
    },
    {
      path: "/customer-score-card",
      element: <CustomerScoreCard />,
    },

    {
      path: "/*",
      element: <NotFound />,
    },
    {
      path: "/beats-pending-table",
      element: <LazyBeatsPendingTable />,
    },
    {
      path: "/beats-orders-table",
      element: <LazyBeatsOrdersTable />,
    },
    {
      path: "/beats-delivered-table",
      element: <LazyBeatsDeliveredTable />,
    },
    {
      path: "/beats-rejected-table",
      element: <LazyBeatsRejectedTable />,
    },

    {
      path: "/orders-pending-table",
      element: <LazyOrdersPendingTable />,
    },
    {
      path: "/orders-total-table",
      element: <LazyOrdersTotalTable />,
    },
    {
      path: "/orders-accepted-table",
      element: <LazyOrdersAcceptedTable />,
    },
    {
      path: "/orders-rejected-table",
      element: <LazyOrdersRejectedTable />,
    },

    {
      path: "/total-beats-table",
      element: <LazyDeliveryTotalBeatTable />,
    },
    {
      path: "/total-district-table",
      element: <LazyDeliveryTotalDistrictTable />,
    },

    {
      path: "/escalation-count-table",
      element: <LazyEscalationTotalCountTable />,
    },

    {
      path: "/positive-escalation-table",
      element: <LazyPositiveEscalationCountTable />,
    },
    {
      path: "/negative-escalation-table",
      element: <LazyNegativeEscalationCountTable />,
    },
  ];

  return (
    <Routes>
      {routesArr?.map((item, index) => (
        <Route path={item?.path} element={item?.element} key={index} />
      ))}
    </Routes>
  );
}
