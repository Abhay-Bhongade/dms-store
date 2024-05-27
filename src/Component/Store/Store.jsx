import React from "react";
import { useNavigate } from "react-router-dom";

const Store = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(`${path}`);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-center items-center m-5">
            <div className="px-2 store-link">
              <h4 onClick={() => handleNavigate("/report")}>Download</h4>
            </div>
            <div className="px-2 store-link">
              <h4 onClick={() => handleNavigate("/store-view")}>View</h4>
            </div>
            <div className="px-2 store-link">
              <h4 onClick={() => handleNavigate("/store-view-scroll")}>
                Update
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
