import MenuItem from '../../components/MenuItem';
import { FaFolderOpen } from 'react-icons/fa6';
import { IoIosSave } from 'react-icons/io';
import { IoIosPrint } from 'react-icons/io';

const colors = ['bg-[#21a6de]', 'bg-[#df21a7]', 'bg-[#de5921]', 'bg-[#20de58]', 'bg-[#745da1]'];

const rightOptions = [
    {
        icon: <IoIosSave size={24} />,
        title: 'Lưu hóa đơn',
        color: colors[0],
    },
    {
        icon: <IoIosPrint size={24} />,
        title: 'In hóa đơn',
        color: colors[1],
    },
];

const SellingPageFooter = () => {
    return (
        <div className="flex justify-between bg-white px-2 py-1">
            <div>
                <MenuItem
                    title="Mở rộng"
                    preIcon={<FaFolderOpen size={24} />}
                    containerStyle="bg-secondary-DARK text-white rounded-md hover:bg-gray-200 hover:text-[#333]"
                    orientation="Vertical"
                    expendDirection="UP"
                    containerSelectedStyle=""
                    submenu={<div />}
                />
            </div>
            <div className="flex gap-2">
                {rightOptions.map((opt, index) => (
                    <MenuItem
                        key={index}
                        title={opt.title}
                        preIcon={opt.icon}
                        orientation="Vertical"
                        containerStyle={
                            ' text-white rounded-md hover:bg-gray-200 hover:text-[#333] ' +
                            opt.color
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default SellingPageFooter;
