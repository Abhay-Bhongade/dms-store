import React, { useState, useEffect } from "react";
import axios from "axios";
import { API, config } from "../../Services/index";
import dummyData from "../../Constants/data.json";
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

const StoreView = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(dummyData || []);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const payload = {
    distributor_id: 1168,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.post(API, payload, config);
        console.log("res", res);
        setData(res?.data?.data);
      } catch (error) {
        console.log("error while fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="container-fluid p-0 m-0">
      <div className="row p-4">
        <div className="col-md-12">
          {/* <h3>Store Data View</h3> */}
          <button
            className="btn btn-primary mb-2"
            onClick={() => navigate("/store-view-scroll")}
          >
            Scroll
          </button>
          {loading ? (
            <div>
              <Loading />
            </div>
          ) : data?.length > 0 ? (
            <>
              <div className="table-wrapper">
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
                      {(rowsPerPage > 0
                        ? data?.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                        : data
                      )?.map((row, index) => (
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
                            {row?.booking_stock_pkg} | {row?.booking_stock_moq}
                          </TableCell>
                          <TableCell>{row?.booking_stock_value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </>
          ) : (
            <div>No Data Found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreView;
