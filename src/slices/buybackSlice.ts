import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Jewelry } from '../types/jewelry.type';

export interface BuyBackState {
    buyBackMethod:number,
    jewelry:Jewelry|null
}


const initialState: BuyBackState = {
  buyBackMethod:0,
    jewelry:null
};

export const buyBackSlice = createSlice({
    name: 'buyBack',
    initialState,
    reducers: {
        setBuyBackMethod: (state, action: PayloadAction<number>) => {
            state.buyBackMethod = action.payload;
        },
        setJewelryBuyBack: (state, action: PayloadAction<Jewelry>) => {
            state.jewelry = action.payload;
        },
        
    },
});


export const {setBuyBackMethod,setJewelryBuyBack } = buyBackSlice.actions;

export default buyBackSlice.reducer;
