import { Button, Input, Table, TableProps } from 'antd';
import { FaClock } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa6';
import { CartItem } from '../../types/cart.type';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const SelectedItems = () => {
    const cart = useSelector((state: RootState) => state.jewelry.cart);
    console.log(cart);
    const columns: TableProps<CartItem>['columns'] = [
        {
            title: 'Hàng hóa',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'S.L',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (_, { quantity }) => <Input value={quantity} />,
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Giảm',
            key: 'sale',
            dataIndex: 'sale',
            render: (_, { sale }) => <Input value={sale} />,
        },
        {
            title: 'T.Tiền',
            dataIndex: 'price',
            key: 'price',
        },
    ];
    return (
        <div className="flex min-w-[490px] flex-col gap-2 bg-primary px-2 pt-1 text-white">
            <div className="flex justify-between">
                <p className="font-medium">Quầy 15 - Bán hàng</p>
                <div className="flex items-center gap-1">
                    <FaClock /> <p> Giờ: {new Date().toLocaleDateString()} 01:13</p>
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
                        <p className="text-xl font-semibold">149,000.00</p>
                    </div>
                </div>
            </div>
            <div>
                <Table columns={columns} dataSource={cart} />
            </div>
        </div>
    );
};

export default SelectedItems;
