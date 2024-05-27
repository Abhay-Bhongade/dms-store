import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URLS, config2 } from "../../../src/Api/apiConfig";

const initialState = {
  loading: false,
  GetReportTableData: [],
  error: "",
};

const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem("token");
  return token || "";
};

// Generates pending, fulfilled, and rejected action types
export const GetReportTableData = createAsyncThunk(
  "GetReportTableData/GetReportTableData",
  async (newData) => {
    try {
      const config2 = {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
          "Content-Type": "multipart/form-data",
        },
      };
      const userRole = localStorage.getItem("userRole"); // Get the user's role from localStorage
      const selectedAPI_URL =
        API_URLS[userRole.toLowerCase()] || "http://16.171.47.172:5000/api/";
      const response = await axios.post(
        selectedAPI_URL + "add-recruiter",
        newData,
        config2
      );
      console.log("response of GetReportTableData  in axios", response);

      // Extract the relevant data from the response if needed
      const relevantData = response.data;
      console.log("relevantData", relevantData);
      return relevantData; // Return only the necessary data
    } catch (error) {
      console.error("An error occurred1:", error);
      console.error("An error occurred2:", error?.response);
      console.error("An error occurred3:", error?.response?.data);

      const customId = "custom-id-yes";
      toast.error(error?.response?.data?.message, {
        toastId: customId,
      });
    }
  }
);

const GetReportTableDataSlice = createSlice({
  name: "GetReportTableData",
  initialState,
  extraReducers: (builder) => {
    // ----------------------------------------------------
    builder.addCase(GetReportTableData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetReportTableData.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(GetReportTableData.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default GetReportTableDataSlice.reducer;
