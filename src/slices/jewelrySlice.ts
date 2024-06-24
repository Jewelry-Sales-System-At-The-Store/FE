import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Jewelry } from '../types/jewelry.type';
import { CartItem } from '../types/cart.type';
import { CreateBillRequest } from '../types/bill.type';

interface TempCart {
    totalPrice: number;
    discount: number;
    pay: number;
}

export interface JewelryState {
    selectedItems: Jewelry[];
    cart: CartItem[];
    bill: CreateBillRequest;
    tempCart: TempCart;
}

const initBill: CreateBillRequest = {
    additionalDiscount: 0,
    counterId: '',
    customerId: '',
    jewelries: [],
    promotions: [],
    userId: '',
};

const initTempCart: TempCart = {
    discount: 0,
    pay: 0,
    totalPrice: 0,
};

const initialState: JewelryState = {
    selectedItems: [],
    cart: [],
    bill: initBill,
    tempCart: initTempCart,
};

const callMoney = (state: JewelryState) => {
    let total = 0;
    state.cart.forEach((item) => (total += item.price * item.quantity));
    state.tempCart.totalPrice = total;
    state.tempCart.pay = total - state.tempCart.discount;
};

export const jewelrySlice = createSlice({
    name: 'jewelry',
    initialState,
    reducers: {
        setQuantity(state, action: PayloadAction<{ cardId: string; quantity: number }>) {
            const existingItem = state.cart.find((item) => item.id === action.payload.cardId);
            if (existingItem) {
                existingItem.quantity = action.payload.quantity;
                callMoney(state);
            }
        },
        addToCart(state, action: PayloadAction<{ item: Jewelry; quantity: number }>) {
            const existingItem = state.cart.find(
                (item) => item.id === action.payload.item.jewelryId,
            );
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                const { name, jewelryId, totalPrice } = action.payload.item;
                const newCartItem: CartItem = {
                    id: jewelryId,
                    name: name,
                    price: totalPrice,
                    quantity: 1,
                    sale: 0,
                    user: 'test',
                };
                state.cart.push(newCartItem);
            }
            callMoney(state);
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
            callMoney(state);
        },
        clearCart(state) {
            state.cart = [];
            state.tempCart = initTempCart;
        },
        clearBill(state) {
            state.bill = initBill;
        },
        callMoney,
    },
});

export const selectAuth = (state: RootState) => state.jewelry;

export const { addToCart, clearCart, removeFromCart, setQuantity } = jewelrySlice.actions;

export default jewelrySlice.reducer;
