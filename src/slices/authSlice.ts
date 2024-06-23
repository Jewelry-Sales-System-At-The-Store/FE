import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { TokenDecode, User } from '../types/user.type';

export interface AuthState {
    tokenDecode: TokenDecode;
    user: User;
}

const initUser: User = {
    bills: [],
    counter: '',
    counterId: '',
    createdAt: '',
    email: '',
    fullName: '',
    gender: '',
    password: '',
    phoneNumber: '',
    purchases: [],
    role: {
        roleId: '',
        roleName: '',
        users: [],
    },
    roleId: '',
    status: false,
    updatedAt: '',
    userId: '',
    username: '',
};

const initToken: TokenDecode = {
    aud: '',
    email: '',
    exp: 0,
    iat: 0,
    Id: '',
    iss: '',
    jti: '',
    nbf: 0,
    role: '',
    sub: '',
};

const initialState: AuthState = {
    tokenDecode: initToken,
    user: initUser,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<TokenDecode>) => {
            state.tokenDecode = action.payload;
            console.log(state.tokenDecode);
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
    },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
