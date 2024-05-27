import { lazy } from "react";
export * from "./UIElements";

export const Store = lazy(() => import("./Store/Store"));
export const LazyStoreView = lazy(() => import("./Store/StoreView"));
export const LazyStoreViewOnScroll = lazy(() =>
  import("./Store/StoreViewOnScroll")
);
export const LazyReportView = lazy(() => import("./Report/Report"));
export const CustomerScoreCard = lazy(() => import("./CustomerScoreCard"));

// beats table routes
export const LazyBeatsPendingTable = lazy(() =>
  import("./ParentTable/Beats/TotalBeatsPending")
);
export const LazyBeatsOrdersTable = lazy(() =>
  import("./ParentTable/Beats/TotalBeatOreders")
);
export const LazyBeatsDeliveredTable = lazy(() =>
  import("./ParentTable/Beats/TotalBeatsDelivered")
);
export const LazyBeatsRejectedTable = lazy(() =>
  import("./ParentTable/Beats/TotalBeatsRejected")
);

// order table routes

export const LazyOrdersTotalTable = lazy(() =>
  import("./ParentTable/Orders/TotalOrders")
);
export const LazyOrdersAcceptedTable = lazy(() =>
  import("./ParentTable/Orders/TotalOrdersAccepted")
);
export const LazyOrdersPendingTable = lazy(() =>
  import("./ParentTable/Orders/TotalOrdersPending")
);
export const LazyOrdersRejectedTable = lazy(() =>
  import("./ParentTable/Orders/TotalOrdersRejected")
);

//delivery tab
export const LazyDeliveryTotalBeatTable = lazy(() =>
  import("./ParentTable/Delivery/TotalBeat")
);

export const LazyDeliveryTotalDistrictTable = lazy(() =>
  import("./ParentTable/Delivery/TotalDistrict")
);

//escalation tab

export const LazyEscalationTotalCountTable = lazy(() =>
  import("./ParentTable/Escalation/TotalEscalationCount")
);

export const LazyPositiveEscalationCountTable = lazy(() =>
  import("./ParentTable/Escalation/TotalPositiveEscalationCount")
);

export const LazyNegativeEscalationCountTable = lazy(() =>
  import("./ParentTable/Escalation/TotalNegativeEscalationCount")
);

//calling day tab
