import React, { useState, useEffect, useRef } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Loading from "../../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { MainHeading, CommonButton } from "../../UIElements/index";
import backIcon from "../../../assets/back.svg";

const CommonTableScoreCard = ({ columns, tabledata, tableheading }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(1000);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    if (tabledata.length > 0) {
      setLoading(false);
    }
  }, [tabledata]);

  const handleScroll = (event) => {
    const container = containerRef.current;
    if (
      container &&
      container.scrollHeight - container.scrollTop <=
        container.clientHeight + 150
    ) {
      event.preventDefault();
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="container-fluid p-0 m-0">
      <div className="row py-4 ps-4 pe-2">
        <div className="col-md-12">
          <div className="d-flex justify-content-between align-items-center my-3">
            <CommonButton
              icon={<img src={backIcon} alt="filter icon" />}
              additionalClass="btn btn-outline-dark border-0 custom-hover ml-n1rem"
              goBack={true}
            />
            <MainHeading
              heading={tableheading}
              additionalClass="your-score-heading text-center customer-score-card-heading  mb-0"
            />
            <div></div>
          </div>

          {loading ? (
            <div>
              <Loading />
            </div>
          ) : tabledata?.length > 0 ? (
            <div
              className="table-wrapper"
              ref={containerRef}
              // onScroll={handleScroll}
              // style={{ maxHeight: "100vh", overflowY: "scroll" }}
            >
              <TableContainer component={Paper} style={{ width: "100%" }}>
                <Table className="table">
                  <TableHead>
                    <TableRow className="mx-2 table-heading-row">
                      {columns.map((column) => (
                        <TableCell key={column.field}>{column.label}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tabledata
                      .slice(0, (page + 1) * rowsPerPage)
                      .map((row, index) => (
                        <TableRow key={index}>
                          {columns.map((column) => (
                            <TableCell key={column.field}>
                              {row[column.field]}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          ) : (
            <div>No Data Found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonTableScoreCard;
