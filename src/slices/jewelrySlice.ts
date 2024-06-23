import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Jewelry } from '../types/jewelry.type';
import { CartItem } from '../types/cart.type';

export interface JewelryState {
    selectedItems: Jewelry[];
    cart: CartItem[];
}

const initialState: JewelryState = {
    selectedItems: [],
    cart: [],
};

export const jewelrySlice = createSlice({
    name: 'jewelry',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Jewelry>) => {
            state.selectedItems.push(action.payload);
        },
        addToCart(state, action: PayloadAction<{ item: Jewelry; quantity: number }>) {
            console.log(state.cart);
            if (state.cart.length > 0) {
                const existingItem = state.cart.find(
                    (item) => item.id === action.payload.item.jewelryId,
                );
                if (existingItem) {
                    existingItem.quantity += action.payload.quantity;
                } else {
                    const { name, jewelryId, jewelryPrice } = action.payload.item;
                    const newCartItem: CartItem = {
                        id: jewelryId,
                        name: name,
                        price: jewelryPrice,
                        quantity: 1,
                        sale: 0,
                        user: 'test',
                    };
                    state.cart.push(newCartItem);
                }
            } else {
                const { name, jewelryId, jewelryPrice } = action.payload.item;
                const newCartItem: CartItem = {
                    id: jewelryId,
                    name: name,
                    price: jewelryPrice,
                    quantity: 1,
                    sale: 0,
                    user: 'test',
                };
                state.cart.push(newCartItem);
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const selectAuth = (state: RootState) => state.jewelry;

export const { addItem, addToCart, clearCart, removeFromCart } = jewelrySlice.actions;

export default jewelrySlice.reducer;
