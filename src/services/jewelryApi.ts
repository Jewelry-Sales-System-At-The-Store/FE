import { PaggingRequest, PaggingRespone } from '../types/base.type';
import { Jewelry } from '../types/jewelry.type';
import { JewelryType } from '../types/user.type';
import { baseQueryWithReauth } from './baseApi';
import { createApi } from '@reduxjs/toolkit/query/react';

export const jewelryApi = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ['jewelry'],
    refetchOnMountOrArgChange: true,
    endpoints: (builder) => ({
        getJewelries: builder.query<
            PaggingRespone<Jewelry>,
            PaggingRequest<{ jewelryTypeId: string }>
        >({
            query: (para) => ({
                url: `api/Jewelry/GetJewelriesByType?jewelryTypeId=${para.data.jewelryTypeId}&pageNumber=${para.pageNumber}&pageSize=${para.pageSize}`,
                method: 'GET',
            }),
        }),
        getJewelryTypes: builder.query<JewelryType[], void>({
            query: () => ({
                url: `api/JewelryType/GetJewelryTypes`,
                method: 'GET',
            }),
        }),
    }),
    reducerPath: 'jewelryApi',
});

export default jewelryApi;
