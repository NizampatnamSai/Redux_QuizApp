import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';




export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
   righans:0,
   wrongans:0

  },
  reducers: {
    Right: (state) => {
      state.righans += 1;
    },
    wrong: (state) => {
      state.wrongans += 1;
    },
   
  },
 
});

export const { Right, wrong } = counterSlice.actions;
export const Rigthvalue = (state) => state.wright.righans;
export const Wrongvalue=(state)=>state.wrong.wrongans;



export default counterSlice.reducer;
