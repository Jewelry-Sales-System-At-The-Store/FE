import { CreateBillRequest } from '../types/bill.type';
import { baseQueryWithReauth } from './baseApi';
import { createApi } from '@reduxjs/toolkit/query/react';

export const billApi = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ['bill'],
    refetchOnMountOrArgChange: true,
    endpoints: (builder) => ({
        createBill: builder.mutation<any, CreateBillRequest>({
            query: () => ({
                url: `api/Bill/CreateBill`,
                method: 'POST',
            }),
        }),
    }),
    reducerPath: 'billApi',
});

export default billApi;
