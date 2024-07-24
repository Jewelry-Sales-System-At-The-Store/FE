import { fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import 'immer';
import { KEYS } from '../enums';
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5188/',
    prepareHeaders: async (headers) => {
        const token = await localStorage.getItem(KEYS.ACCESS_TOKEN);
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const baseQueryWithReauth: (args: any, api: any, extraOptions: any) => any = async (
    args: any,
    api: any,
    extraOptions: any,
) => {
    let response = await baseQuery(args, api, extraOptions);

    if (response.error && (response.error as FetchBaseQueryError).status === 401) {
        
    }

    return response;
};
