import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';




export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
   righans:0,
   wrongans:0,
   corectan:0,
   totalscor:0,
   answerdaqu:0,
   timeout:false,
  
  },
  reducers: {
    Right: (state) => {
      state.righans += 1;
    },
    wrong: (state) => {
      state.wrongans += 1;
    },
    Corectans:(state)=>{
      state.corectan +=1;
    },
    Ansrdque:(state)=>{
      state.answerdaqu +=1;

    },
    TotalScore:(state,action)=>{
      state.totalscor=action.payload
    },




   Timeout:(state)=>{
     state.timeout=true;
   }
  },
 
});


export const { Right, wrong,Timeout,Corectans,Ansrdque,TotalScore } = counterSlice.actions;
export const Rigthvalue = (state) => state.wright.righans;
export const Wrongvalue=(state)=>state.wrong.wrongans;
export const Timeoutt=(state)=>state.time.timeout;
export const Corectval=(state)=> state.coret.corectan;
export const Ansredval=(state)=>state.ansrd.answerdaqu
export const Totlascor=(state)=> state.totlscore.totalscor



export default counterSlice.reducer;
