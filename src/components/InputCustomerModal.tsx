import { Button, Empty, Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';

interface InputCustomerModalProps {
    title: string;
}

const InputCustomerModal = ({ title }: InputCustomerModalProps) => {
    const dispatch = useDispatch();
    const open = useSelector((state: RootState) => state.customer.showCustomerModal);
    const customer = useSelector((state: RootState) => state.customer.customer);
    const [isNotFount, setisNotFount] = useState(false);
    const [searchPhone, setsearchPhone] = useState('');
    const handleFindCustomer = () => {
        setisNotFount(true);
    };

    return (
        <div>
            <Modal
                footer={false}
                width={300}
                style={{ padding: 0 }}
                closable={false}
                title={
                    <div className="bg-primary p-2">
                        <p className="w-full text-center text-lg uppercase text-white">{title}</p>
                    </div>
                }
                open={open}
                styles={{
                    content: {
                        padding: 0,
                    },
                }}
                className="min-w-fit"
            >
                <div className="w-[400px] max-w-[400px] p-6">
                    {customer && customer.customerId.length == 0 && (
                        <div>
                            <div className="flex gap-2">
                                <Input
                                    style={{ borderRadius: 2 }}
                                    className="border-green-OUTLINE"
                                    placeholder="Nhập số điện thoại"
                                    onChange={(e) => setsearchPhone(e.currentTarget.value)}
                                    value={searchPhone}
                                    type="number"
                                    onFocus={() => setisNotFount(false)}
                                />
                                <Button
                                    type="primary"
                                    className="rounded-sm bg-primary text-white"
                                    onClick={handleFindCustomer}
                                >
                                    Tìm kiếm
                                </Button>
                            </div>
                            {isNotFount && (
                                <div className="mt-5">
                                    <Empty
                                        imageStyle={{ height: 100 }}
                                        description={
                                            <p>
                                                Không tìm thấy thông tin khách hàng
                                                <b className="font-medium">{' ' + searchPhone}</b>
                                            </p>
                                        }
                                    />
                                </div>
                            )}
                            <Button
                                type="primary"
                                size="middle"
                                className="mt-5 w-full rounded-sm bg-secondary text-white hover:!bg-secondary-LIGHT"
                                icon={<FaUserPlus />}
                            >
                                <p>Tạo mới</p>
                            </Button>
                        </div>
                    )}
                    {customer && customer.customerId.length > 0 && (
                        <div className="text-[#333]">
                            <div className="flex justify-between gap-2">
                                <p className="text-base">
                                    <b className="font-medium">Họ và tên:</b>
                                </p>
                                <p className="text-base font-bold capitalize text-primary-TEXT">
                                    Nguyễn Thành long
                                </p>
                            </div>
                            <div className="flex justify-between gap-2">
                                <p className="text-base">
                                    <b className="font-medium">Số điện thoại:</b>
                                </p>
                                <p className="text-base font-bold text-secondary-DARK">
                                    0389142366
                                </p>
                            </div>
                            <div className="flex justify-between gap-2">
                                <p className="text-base">
                                    <b className="font-medium">Điểm tích lũy:</b>
                                </p>
                                <p className="text-base font-bold text-red-400">10 Points</p>
                            </div>
                            <div className="flex justify-between gap-2">
                                <p className="text-base">
                                    <b className="font-medium">Địa chỉ: </b>
                                    Hẻm 68, lê văn việt, Quận 9 , tp. Hồ chí minh inosa fksanjf
                                    slfknsa dfklsandf
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default InputCustomerModal;
