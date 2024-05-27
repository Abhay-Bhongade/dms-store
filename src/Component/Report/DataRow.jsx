import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {getReportData} from "../../Services/ReportData/ReportData"

const DataRow = ({ label, value, additionalClass = "", to,type,type_value,payload }) => {
  const navigate = useNavigate();
const [loading,setLoading] = useState(false);
  const handleClick = async() => {
const payloadObj = {
  ...payload,
  type:type,
  type_value:type_value

}
const token = "11043|00geKyFYz48BcqtxLF3WmGM3jALGSVs95AwaYUZy"
    if(type === "beats"){
     try {
      const res = await getReportData(payloadObj,token)
     } catch (error) {
      console.log("error",error)
     }
    }else if(type === "orders"){
      try {
        const res = await getReportData(payloadObj,token)
       } catch (error) {
        console.log("error",error)
       }
    }



    if (to) {
      navigate(to);
    }
  };
  return (
    <div
      className={`col py-1 nested-card-6  ${additionalClass}`}
      onClick={handleClick}
    >
      <p className="card-nested-content-para">{label}</p>
      <p className="card-nested-content-para">{value}</p>
    </div>
  );
};

export default DataRow;
