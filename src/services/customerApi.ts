import { CreateCustomerRequest } from '../types/customer.type';
import { baseQueryWithReauth } from './baseApi';
import { createApi } from '@reduxjs/toolkit/query/react';

export const customerApi = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ['customer'],
    refetchOnMountOrArgChange: true,
    endpoints: (builder) => ({
        createCustomer: builder.mutation<void, CreateCustomerRequest>({
            query: (body) => ({
                url: 'api/Customer/CreateCustomer',
                method: 'POST',
                body: body,
            }),
        }),
    }),
    reducerPath: 'customerApi',
});

export default customerApi;
