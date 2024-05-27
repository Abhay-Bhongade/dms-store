const API =
  "http://dmsapp.tekzee.in/api/distributor/getDbInventoryStockvalueAndDeliveryV2";

const token = "11051|6913ORvNXjso2OUXJYaNwuQcC2ir9INNvUh3HSsG";

const config = {
  headers: {
    //Authorization: `Bearer ${token}`,
    // "Accept": "application/json",
    "Content-Type": "application/json",
    languagecode: "en",
  },
};

export { API, config };
