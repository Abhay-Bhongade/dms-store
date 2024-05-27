import APIrequest from "../axios";

export const getReportData = (payload, token) => {
    return APIrequest(
      "getDbInventoryStockvalueAndDeliveryV1",
      payload,
      "POST",
      {
        token: token,
      }
    );
  };