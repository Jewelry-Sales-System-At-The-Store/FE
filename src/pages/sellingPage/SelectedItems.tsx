import { Button, Input, Popconfirm, Table, TableProps, Tooltip } from 'antd';
import { FaClock } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa6';
import { CartItem } from '../../types/cart.type';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import GetNumberModel from '../../components/GetNumberModel';
import { removeFromCart, setQuantity } from '../../slices/jewelrySlice';
import { formatNumber } from '../../utils/formater';

import { MdDelete } from 'react-icons/md';
import SelectPromotionModal from '../../components/SelectPromotionModal';

const SelectedItems = () => {
    const cart = useSelector((state: RootState) => state.jewelry.cart);
    const tempCart = useSelector((state: RootState) => state.jewelry.tempCart);
    const dispatch = useDispatch();
    const getCurrentTime = () => {
        const options: Intl.DateTimeFormatOptions = {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        };

        return new Date().toLocaleString('vi', options);
    };

    const columns: TableProps<CartItem>['columns'] = [
        {
            title: 'Hàng hóa',
            dataIndex: 'name',
            key: 'name',
            render: (text) => (
                <Tooltip title={text}>
                    <p className="line-clamp-1 w-[120px] max-w-[120px] cursor-help overflow-x-auto">
                        {text}
                    </p>
                </Tooltip>
            ),
        },
        {
            title: 'S.L',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (_, { quantity, id }) => (
                <GetNumberModel
                    title="Điều chỉnh số lượng"
                    onOK={(num) => {
                        dispatch(setQuantity({ cardId: id, quantity: num }));
                    }}
                    value={quantity}
                    numberType="Integer"
                    childen={
                        <Input
                            className="max-w-[100px] rounded-sm border-green-OUTLINE text-right"
                            value={formatNumber(quantity + '')}
                        />
                    }
                />
            ),
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
            render: (_, { price }) => (
                <div className="h-full rounded-sm border-[1px] border-[#ccc] px-3 py-1">
                    <p>{formatNumber(price + '')}</p>
                </div>
            ),
        },
        // {
        //     title: 'Giảm',
        //     key: 'sale',
        //     dataIndex: 'sale',
        //     render: (_, { sale }) => (
        //         <Input className="max-w-[100px]" value={sale.toPrecision(2)} />
        //     ),
        // },
        {
            title: 'T.Tiền',
            key: 'totalPrice',
            render: (_, { quantity, price }) => (
                <div className="h-full rounded-sm border-[1px] border-[#ccc] px-3 py-1">
                    <p>{formatNumber(quantity * price + '')}</p>
                </div>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, { id, name }) => (
                <Popconfirm
                    title={'Xác nhận xóa'}
                    description={
                        <p>
                            Bạn có chắc muốn xóa <b>{name}</b>
                        </p>
                    }
                    okText="Xóa"
                    okType="danger"
                    cancelText="Hủy"
                    onConfirm={() => dispatch(removeFromCart(id))}
                >
                    <Button danger icon={<MdDelete size={18} />}></Button>
                </Popconfirm>
            ),
        },
    ];
    return (
        <div className="flex min-w-[600px] max-w-[600px] flex-col gap-2 bg-primary px-2 pt-1 text-white">
            <div className="flex justify-between">
                <p className="font-medium">Quầy 15 - Bán hàng</p>
                <div className="flex items-center gap-1">
                    <FaClock /> <p> Giờ: {getCurrentTime()}</p>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <Button className="!bg-secondary-DARK py-0 text-white hover:border-secondary-DARK hover:!text-white">
                        Sửa
                    </Button>
                    <Button className="!bg-secondary-DARK align-middle text-white hover:border-secondary-DARK hover:!text-white">
                        In nhãn
                    </Button>
                </div>
                <div>
                    <div className="flex items-center gap-1">
                        <FaDollarSign />
                        <p className="text-lg font-medium">phải trả: </p>
                        <p className="text-xl font-semibold">{formatNumber(tempCart.pay + '')}</p>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <Table columns={columns} dataSource={cart} />
            </div>
            <div className="grid grid-cols-2 p-2">
                <div className="flex items-center justify-end gap-1">
                    <p className="text-lg">Tổng tiền:</p>
                    <div className="rounded-sm bg-white px-2 text-xl font-medium text-[#333]">
                        <p>{formatNumber(tempCart.totalPrice + '')}</p>
                    </div>
                </div>
                <div className="flex cursor-pointer items-center justify-end gap-1">
                    <p className="text-lg">Giảm bill:</p>
                    <SelectPromotionModal
                        title="Điều chỉnh khuyến mãi"
                        childen={
                            <div className="rounded-sm bg-white px-2 text-xl font-medium text-[#333]">
                                <p>{formatNumber(tempCart.discount + '')}</p>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default SelectedItems;
