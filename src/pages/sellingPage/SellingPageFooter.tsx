import MenuItem from '../../components/MenuItem';
import { FaFolderOpen } from 'react-icons/fa6';
import { IoIosSave } from 'react-icons/io';
import { IoIosPrint } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import billApi from '../../services/billsApi';
import { useEffect } from 'react';
import { RootState } from '../../store';

const colors = ['bg-[#21a6de]', 'bg-[#df21a7]', 'bg-[#de5921]', 'bg-[#20de58]', 'bg-[#745da1]'];
type Options = 'saveBill' | 'printBill';
interface RightOptions {
    icon: React.ReactNode;
    title: string;
    color: string;
    id: Options;
}

const rightOptions: RightOptions[] = [
    {
        icon: <IoIosSave size={24} />,
        title: 'Lưu hóa đơn',
        color: colors[0],
        id: 'saveBill',
    },
    {
        icon: <IoIosPrint size={24} />,
        title: 'In hóa đơn',
        color: colors[1],
        id: 'printBill',
    },
];

const SellingPageFooter = () => {
    //const dispatch = useDispatch();
    const tempBill = useSelector((state: RootState) => state.jewelry.bill);
    const user = useSelector((state: RootState) => state.auth.user);
    //------------------------ handle call api create bills ----------------------//

    const [CreateBill, { isLoading, isSuccess, data, isError, error }] =
        billApi.useCreateBillMutation();

    useEffect(() => {
        if (isSuccess && data) {
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            console.log(error);
        }
    }, [isError]);

    //------------------------ end handle call api create bills ----------------------//

    const handleBtnClick = (options: Options) => {
        switch (options) {
            case 'saveBill':
                CreateBill({ ...tempBill, userId: user.userId, counterId: user.counterId });
                break;
            case 'printBill':
                break;
        }
    };

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
                        onItemClick={() => handleBtnClick(opt.id)}
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
