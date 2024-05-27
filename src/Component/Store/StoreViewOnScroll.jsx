import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { API, config } from "../../Services/index";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { longSentence } from "../../Utils/common";

const StoreViewOnScroll = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  const payload = {
    distributor_id: 1168,
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.post(API, payload, config);
      setData((prevData) => [...prevData, ...res?.data?.data]);
    } catch (error) {
      console.log("error while fetching data", error);
    } finally {
      setLoading(false);
    }
  };

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
          <button
            className="btn btn-primary mb-2"
            onClick={() => navigate("/store-view")}
          >
            Pagination
          </button>
          {loading ? (
            <div>
              <Loading />
            </div>
          ) : data?.length > 0 ? (
            <>
              <div
                className="table-wrapper"
                ref={containerRef}
                onScroll={handleScroll}
                style={{ maxHeight: "80vh", overflowY: "scroll" }}
              >
                <TableContainer component={Paper} style={{ width: "100%" }}>
                  <Table className="table">
                    <TableHead>
                      <TableRow className="mx-2 table-heading-row">
                        <TableCell>Sr No</TableCell>
                        <TableCell>Sku code</TableCell>
                        <TableCell>Long Description</TableCell>
                        <TableCell>Brand</TableCell>
                        <TableCell>Category | Variant</TableCell>
                        <TableCell>MRP</TableCell>
                        <TableCell>PTR Per Piece</TableCell>
                        <TableCell>PTR Per MOQ</TableCell>
                        <TableCell>PTR Per PKG</TableCell>
                        <TableCell>Physical Stock PKG | MOQ</TableCell>
                        <TableCell>Physical Value</TableCell>
                        <TableCell>OB Stock PKG | MOQ</TableCell>
                        <TableCell>OB Value</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data
                        ?.slice(0, (page + 1) * rowsPerPage)
                        ?.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{row?.sku_code}</TableCell>
                            <TableCell>
                              {longSentence(160, row?.sku_long_desc)}
                            </TableCell>
                            <TableCell>{row?.brand_name}</TableCell>
                            <TableCell>
                              {row?.category_name} | {row?.variant_name}
                            </TableCell>
                            <TableCell>{row?.sku_mrp}</TableCell>
                            <TableCell>{row?.ptr}</TableCell>
                            <TableCell>{row?.ptr_rate_per_moq}</TableCell>
                            <TableCell>{row?.ptr_rate_per_pkg}</TableCell>
                            <TableCell>
                              {row?.physical_stock_pkg} |{" "}
                              {row?.physical_stock_moq}
                            </TableCell>
                            <TableCell>{row?.physical_stock_value}</TableCell>
                            <TableCell>
                              {row?.booking_stock_pkg} |{" "}
                              {row?.booking_stock_moq}
                            </TableCell>
                            <TableCell>{row?.booking_stock_value}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </>
          ) : (
            <div>No Data Found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreViewOnScroll;
