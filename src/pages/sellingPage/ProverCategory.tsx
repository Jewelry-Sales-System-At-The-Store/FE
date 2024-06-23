import { useEffect } from 'react';
import jewelryApi from '../../services/jewelryApi';
import { Spin } from 'antd';

const ProverCategory = () => {
    //-----------------------handle call get Jewelries type ---------------------------//
    const { isLoading, isError, error, data } = jewelryApi.useGetJewelryTypesQuery();

    useEffect(() => {
        if (isError) {
            console.log('error load types : ', error);
        }
    }, [isError]);
    //----------------------- end handle call get Jewelries type ---------------------------//
    return (
        <div>
            {!isLoading && data && (
                <div className="grid w-[400px] grid-cols-2 gap-2 px-2">
                    {data.map((type) => (
                        <p
                            key={type.jewelryTypeId}
                            className="cursor-pointer select-none rounded-sm border-[1px] border-[#ccc] py-2 text-center hover:bg-gray"
                        >
                            {type.name}
                        </p>
                    ))}
                </div>
            )}
            {isLoading && (
                <div className="flex min-h-[200px] items-center justify-center">
                    <Spin size="large" />
                </div>
            )}
        </div>
    );
};

export default ProverCategory;
