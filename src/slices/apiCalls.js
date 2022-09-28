import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

//action for getting data from nasa
export const getNasa = createAsyncThunk(
  "nasa/getImage",
  async (dispatch, getState) => {
  
    try{
    return await axios.get("https://api.nasa.gov/planetary/apod?api_key=SPkLKA7bCBamNIY9kJ4ceIeWB67uFjxP5lXkQeNR")
    }catch(err){
     return err;
    }
  }
);

//action for getting data from imdb
export const getImdb = createAsyncThunk(
    "nasa/getImdb",
    async (dispatch, getState) => {
    
      try{
      return await axios.get("https://api.themoviedb.org/3/search/movie?api_key=48b43c71c226d58239efb833d05ab17c&language=en-US&query=NASA&include_adult=false&1")
      }catch(err){
       return err;
      }
    }
  );


//Redux State
const apiCalls = createSlice({
  name: "apiData",
  initialState: {
    status:"",
    nasa: [],
    imdb:[]
  },
  
  //reducers for thunk axios call come here
  extraReducers: {
    [getNasa.pending]: (state, action) => {
      state.status = "loading";
    },
    [getNasa.fulfilled]: (state, action) => {
      state.status = "success";
      state.nasa = action.payload.data;
     },
    [getNasa.rejected]: (state, action) => {
      state.status = "failed";
    },
    [getImdb.pending]: (state, action) => {
        state.status = "loading";
      },
      [getImdb.fulfilled]: (state, action) => {
        state.status = "success";
        state.imdb = action.payload.data;
       },
      [getImdb.rejected]: (state, action) => {
        state.status = "failed";
      }
  },
});


export default apiCalls.reducer;