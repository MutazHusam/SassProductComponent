import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

interface Opportunity {
  title: string;
  summary: string;
  description: string;
  keySkills: string;
  benefits: string;
  criteria: string;
  programType: number;
  programStartDate: string;
  applicationOpenDate: string;
  applicationCloseDate: string;
  duration: string;
  location: string;
  minQualification: number;
  maxApplications: number;
}

export const getPrograms = createAsyncThunk(
  "categories/getPrograms",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios.get(
        "https://cpprogrammicroservice.azurewebsites.net/api/ProgramDashboard/GetAllProgramDetailsAsync"
      );
      Swal.fire(
        "GET Request Excuted!",
        "data stored in redux state",
        "success"
      );
      return data.data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const postOpportunity = createAsyncThunk(
  "categories/postOpportunity",
  async (Opportunity: Opportunity, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(
          "https://cpprogrammicroservice.azurewebsites.net/api/ProgramDashboard/SaveProgramDetails?programProviderID=3fa85f64-5717-4562-b3fc-2c963f66afa6",
          {
            title: Opportunity.title,
            summary: Opportunity.summary,
            description: Opportunity.description,
            keySkills: Opportunity.keySkills,
            benefits: Opportunity.benefits,
            criteria: Opportunity.criteria,
            programType: Opportunity.programType,
            programStartDate: Opportunity.programStartDate,
            applicationOpenDate: Opportunity.applicationOpenDate,
            applicationCloseDate: Opportunity.applicationCloseDate,
            duration: Opportunity.duration,
            location: Opportunity.location,
            minQualification: Opportunity.minQualification,
            maxApplications: Opportunity.maxApplications,
          }
        )
        .then((response) => {
          Swal.fire(
            "POST Request Excuted!",
            "data stored in redux state",
            "success"
          );
        });
      return Opportunity;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

const programsSlice = createSlice({
  name: "categories",
  initialState: { programs: <any>[], opportunities: <any>[] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPrograms.pending, (state, action) => {
      //   console.log(action);
    });
    builder.addCase(getPrograms.fulfilled, (state, action) => {
      //   console.log(action);
      state.programs = action.payload;
    });
    builder.addCase(getPrograms.rejected, (state, action) => {
      // console.log(action);
    });

    builder.addCase(postOpportunity.pending, (state, action) => {
      //   console.log(action);
    });
    builder.addCase(postOpportunity.fulfilled, (state, action) => {
      state.opportunities = [action.payload, ...state.opportunities];
    });
    builder.addCase(postOpportunity.rejected, (state, action) => {
      // console.log(action);
    });
  },
});
export const programsActions = programsSlice.actions;
export default programsSlice.reducer;
