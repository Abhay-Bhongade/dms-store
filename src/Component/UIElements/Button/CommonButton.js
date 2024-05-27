import React from "react";
import { useNavigate } from "react-router-dom";

const CommonButton = ({
  heading,
  additionalClass = "",
  icon,
  to,
  goBack = false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (goBack) {
      navigate(-1);
    } else if (to) {
      navigate(to);
    }
  };

  return (
    <button className={`text-center ${additionalClass}`} onClick={handleClick}>
      {icon}
    </button>
  );
};

export default CommonButton;
