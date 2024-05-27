import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location obj",location);
  const { pathname } = location;

  useEffect(() => {
    let path = "";
    if (pathname.search("/") >= 0) {
      path = "/";
    }
    navigate(path);
  }, []);

  return <></>;
};

export default NotFound;
