import CustomerModel from './CustomModel';
import moneyPay from '../assets/moneyPay.jpg';
import qrPay from '../assets/qrpay.jpg';
import { Button } from 'antd';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setPaymentMethod } from '../slices/jewelrySlice';
interface CheckoutModelProps {
    open: boolean;
}
const payList = [
    {
        id: 1,
        title: 'Tiền mặt',
        src: moneyPay,
    },
    {
        id: 2,
        title: 'Chuyển khoản',
        src: qrPay,
    },
];

const CheckoutModel = ({ open }: CheckoutModelProps) => {
    const dispatch = useDispatch();
    const selectedPaymentMethod = useSelector(
        (state: RootState) => state.jewelry.selectedPaymentMethod,
    );
    return (
        <div>
            <CustomerModel
                title={
                    selectedPaymentMethod == 0
                        ? 'Chọn phương thức thanh toán'
                        : 'Thông tin thanh toán'
                }
                open={open}
                body={
                    <div className="px-10 py-6">
                        {selectedPaymentMethod == 0 && (
                            <div>
                                <div className="flex gap-20">
                                    {payList.map((i) => (
                                        <div key={i.id} className="relative">
                                            <img
                                                src={i.src}
                                                className="h-[150px] max-h-[150px] min-h-[150px] w-[150px] cursor-pointer rounded-full object-cover"
                                                onClick={() => dispatch(setPaymentMethod(i.id))}
                                            />
                                            {selectedPaymentMethod === i.id && (
                                                <div className="absolute right-0 top-0 rounded-full bg-white">
                                                    <FaCheckCircle
                                                        size={30}
                                                        className="text-secondary"
                                                    />
                                                </div>
                                            )}
                                            <p className="mt-4 select-none text-center text-base font-medium text-primary-TEXT">
                                                {i.title}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    className="mt-8 w-full rounded-sm bg-secondary hover:!bg-secondary-LIGHT"
                                    type="primary"
                                    disabled={selectedPaymentMethod == 0}
                                    size="large"
                                    icon={<FaArrowRight />}
                                    iconPosition="end"
                                >
                                    Tiếp tục
                                </Button>
                            </div>
                        )}
                        {selectedPaymentMethod == 1 && <div></div>}
                    </div>
                }
            />
        </div>
    );
};

export default CheckoutModel;
