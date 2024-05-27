import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { useNavigate } from "react-router-dom";

const styles = {
  dial: {
    display: "inline-block",
    width: `300px`,
    height: `auto`,
    color: "#000",
    border: "0.5px solid #fff",
    padding: "2px",
    borderTopLeftRadius: "20px",
    cursor: "pointer",
  },
  title: {
    fontSize: "1em",
    color: "#000",
  },
};

const Chart = ({ score }) => {
  const navigate = useNavigate();
  return (
    <div style={styles.dial} onClick={() => navigate("/customer-score-card")}>
      <ReactSpeedometer
        maxValue={10}
        minValue={1}
        height={190}
        width={291}
        value={score}
        needleTransition="easeQuadIn"
        needleTransitionDuration={1000}
        needleColor="red"
        startColor="#FA0200"
        segments={10}
        endColor="#65c34e"
      />
    </div>
  );
};

export default Chart;
