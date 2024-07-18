import { useEffect, useState } from 'react';
import jewelryApi from '../services/jewelryApi';
import CustomerModel from './CustomModel';

import { Button, Empty, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setJewelryBuyBack } from '../slices/buybackSlice';

interface CheckBuyBackModelProps {
    open: boolean;
}

const CheckBuyBackModel = ({ open }: CheckBuyBackModelProps) => {
    const dispatch = useDispatch();
    const initValue = {
        jewelryId: '',
    };
    const [jewelryid, setjewelryid] = useState('');
    const { currentData, isFetching, isError, isSuccess } =
        jewelryApi.useGetJewelryByIdQuery(jewelryid);
    const [isNotfound, setisNotfound] = useState(false);

    useEffect(() => {
        if (isSuccess && currentData) {
            dispatch(setJewelryBuyBack(currentData));
        }
    }, [isSuccess, currentData]);

    useEffect(() => {
        if (isError) {
            setisNotfound(true);
        }
    }, [isError]);

    return (
        <div>
            <CustomerModel
                title="Thông tin sản phẩm"
                body={
                    <div className="w-[400px] max-w-[400px] p-6">
                        <div>
                            <Form
                                initialValues={initValue}
                                onFinish={(v) => {
                                    console.log(v);
                                    setjewelryid(v.jewelryId);
                                }}
                                className="flex gap-2"
                            >
                                <Form.Item name={'jewelryId'} className="w-full">
                                    <Input
                                        style={{ borderRadius: 2 }}
                                        className="border-green-OUTLINE"
                                        placeholder="Nhập mã sản phẩm"
                                        onFocus={() => setisNotfound(false)}
                                    />
                                </Form.Item>
                                <Button
                                    type="primary"
                                    className="rounded-sm bg-primary text-white"
                                    htmlType="submit"
                                    loading={isFetching}
                                >
                                    Kiểm tra
                                </Button>
                            </Form>
                            {isNotfound && (
                                <div className="mt-5">
                                    <Empty
                                        imageStyle={{ height: 100 }}
                                        description={
                                            <p>
                                                Không tìm thấy thông tin sản phẩm mã{' '}
                                                <b className="font-medium">{' ' + jewelryid}</b>
                                            </p>
                                        }
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                }
                open={open}
            />
        </div>
    );
};

export default CheckBuyBackModel;
