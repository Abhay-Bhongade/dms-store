import React, { useState } from "react";
import {
  Modal,
  Box,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";
import moment from "moment";

const style = {
  position: "absolute",
  top: { xs: "auto", sm: "50%" },
  bottom: { xs: 0, sm: "auto" },
  left: "50%",
  transform: { xs: "translate(-50%, 0)", sm: "translate(-50%, -50%)" },
  width: "100%",
  maxWidth: { xs: "100%", sm: 400 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  borderRadius: { xs: "16px 16px 0 0", sm: "8px" },
};

const btnStyle = {
  bgcolor: "#F3505A",
  borderRadius: 14,
};

const DateFilterModal = ({ open, handleClose, handleFilter }) => {
  const currentYear = moment().year();
  const currentMonth = moment().month() + 1;

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);
  const [yearDialogOpen, setYearDialogOpen] = useState(false);

  const handleSubmit = () => {
    handleFilter({ year, month });
    handleClose();
  };

  const handleYearClick = (selectedYear) => {
    setYear(selectedYear);
    if (selectedYear !== currentYear) {
      setMonth(1); // Reset month to January if a different year is selected
    } else {
      setMonth(currentMonth); // Reset month to current month if current year is selected
    }
    setYearDialogOpen(false);
  };

  const months = moment.months().filter((_, index) => {
    return year !== currentYear || index < currentMonth;
  });

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="my-2">
          <div className="content-space-between">
            <div className="filter_reset_btn">फ़िल्टर</div>
            <div className="filter_reset_btn">रीसेट</div>
          </div>
          <FormControl fullWidth>
            <InputLabel id="year-label">Year</InputLabel>
            <Select
              labelId="year-label"
              value={year}
              label="Year"
              onClick={() => setYearDialogOpen(true)}
              readOnly
            >
              <MenuItem value={year}>{year}</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="month-label">Month</InputLabel>
            <Select
              labelId="month-label"
              value={month}
              label="Month"
              onChange={(e) => setMonth(e.target.value)}
            >
              {months.map((month, index) => (
                <MenuItem key={index} value={index + 1}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="content-in-center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={btnStyle}
            >
              Done
            </Button>
          </div>
        </Box>
      </Modal>
      <Dialog open={yearDialogOpen} onClose={() => setYearDialogOpen(false)}>
        <DialogTitle>Select Year</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {Array.from(
              new Array(12),
              (_, index) => moment().year() - index
            ).map((year) => (
              <Grid item xs={4} key={year}>
                <Button
                  fullWidth
                  variant={year === year ? "contained" : "outlined"}
                  onClick={() => handleYearClick(year)}
                >
                  <Typography>{year}</Typography>
                </Button>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DateFilterModal;
