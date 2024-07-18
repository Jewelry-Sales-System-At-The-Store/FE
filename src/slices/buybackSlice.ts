import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface BuyBackState {
    buyBackMethod:number
}


const initialState: BuyBackState = {

  buyBackMethod:0
};

export const buyBackSlice = createSlice({
    name: 'buyBack',
    initialState,
    reducers: {
        setBuyBackMethod: (state, action: PayloadAction<number>) => {
            state.buyBackMethod = action.payload;
        
        },
        
    },
});


export const {setBuyBackMethod } = buyBackSlice.actions;

export default buyBackSlice.reducer;
