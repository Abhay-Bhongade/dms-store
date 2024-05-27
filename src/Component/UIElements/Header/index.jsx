import React from "react";

const MainHeading = ({ heading, additionalClass = "" }) => (
  <>
    <h2 className={`text-center ${additionalClass}`}>{heading}</h2>
  </>
);

export default MainHeading;
