import { lazy } from "react";

export { default as DateFilterModal } from "./Modal/DateFilterModal";
export { default as CommonButton } from "./Button/CommonButton";

export { default as CommanTable } from "./Table/index";
export { default as MainHeading } from "./Header/index";
export const LazyCommanTable = lazy(() => import("./Table/index"));
export const LazyCommonTableScoreCard = lazy(() =>
  import("./Table/CommonTableScoreCard")
);
