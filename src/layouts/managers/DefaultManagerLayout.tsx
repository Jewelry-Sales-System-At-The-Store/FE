import HeaderMenuDropDown, { HeaderMenuDropDownProps } from './HeaderMenuDropDown';
import { IoMdSettings } from 'react-icons/io';
import { FaShoppingCart } from 'react-icons/fa';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { FaGift } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa6';
import { MdHomeWork } from 'react-icons/md';
import { MdCategory } from 'react-icons/md';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface HeaderMenu {
    preIcon?: React.ReactNode;
    title: string;
    subMenu?: string[][];
    id: number;
}

const menus: HeaderMenu[] = [
    {
        title: 'Hệ thống',
        preIcon: <IoMdSettings />,
        id: 1,
    },
    {
        title: 'Danh mục',
        preIcon: <MdCategory />,
        id: 2,
    },
    {
        title: 'Kho hàng',
        preIcon: <MdHomeWork />,
        id: 3,
    },
    {
        title: 'Thu tiền',
        preIcon: <FaDollarSign />,
        id: 4,
    },
    {
        title: 'K.Mãi-VIP',
        preIcon: <FaGift />,
        id: 5,
    },
    {
        title: 'Doanh thu',
        preIcon: <FaFileInvoiceDollar />,
        id: 6,
    },
    {
        title: 'Bán hàng',
        preIcon: <FaShoppingCart />,
        id: 7,
    },
];

const DefaultManagerLayout = ({ childen }: { childen: React.ReactNode }) => {
    const user = useSelector((state: RootState) => state.auth.user);
    console.log(user);
    const [selectedItem, setselectedItem] = useState(menus.length - 1);
    return (
        <div className="flex min-h-screen w-full flex-col">
            <div className="sticky flex justify-between">
                <div className="flex gap-2">
                    {menus.map((menu) => (
                        <HeaderMenuDropDown
                            key={menu.id}
                            title={menu.title}
                            preIcon={menu.preIcon}
                            isSelect={selectedItem == menu.id}
                            onItemClick={() => setselectedItem(menu.id)}
                        />
                    ))}
                </div>
                <div>
                    <HeaderMenuDropDown title={''} preIcon={<FaUser />} />
                </div>
            </div>
            <div className="flex flex-1 flex-col bg-gray">{childen}</div>
        </div>
    );
};

export default DefaultManagerLayout;
