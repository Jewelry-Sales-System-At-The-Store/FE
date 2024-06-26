import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Customer } from '../types/customer.type';

export interface CustomerState {
    customer: Customer;
    showCustomerModal: boolean;
}
const initCustomer: Customer = {
    address: '',
    customerId: '',
    email: '',
    fullName: '',
    gender: '',
    phone: '',
    point: 0,
    userName: '',
};

const initialState: CustomerState = {
    customer: initCustomer,
    showCustomerModal: true,
};

export const customerState = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        setCustomer: (state, action: PayloadAction<Customer>) => {
            state.customer = action.payload;
        },
        setShowCustomerModal: (state, action: PayloadAction<boolean>) => {
            state.showCustomerModal = action.payload;
        },
    },
});

export const selectCustomer = (state: RootState) => state.customer;

export const { setCustomer, setShowCustomerModal } = customerState.actions;

export default customerState.reducer;
