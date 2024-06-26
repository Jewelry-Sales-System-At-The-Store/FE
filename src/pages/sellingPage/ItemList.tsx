import { Input, Popover, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { FaTags } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';
import ProverCategory from './ProverCategory';
import Item from '../../components/Item';
import jewelryApi from '../../services/jewelryApi';
import { Jewelry } from '../../types/jewelry.type';
import { PaggingRespone } from '../../types/base.type';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { FaChevronCircleRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../slices/jewelrySlice';

type SellingHeaderTab = 'Counters' | 'Jewelrys';
interface Tab {
    id: SellingHeaderTab;
    title: string;
}

const tabs: Tab[] = [
    {
        id: 'Counters',
        title: 'Quầy',
    },
    {
        id: 'Jewelrys',
        title: 'Trang sức',
    },
];

const ItemList = () => {
    const [selectedTab, setselectedTab] = useState<SellingHeaderTab>('Jewelrys');
    const [selectedSubTab, setselectedSubTab] = useState(1);

    const dispatch = useDispatch();
    const [itemList, setitemList] = useState<PaggingRespone<Jewelry>>({
        data: [],
        pageNumber: 1,
        pageSize: 20,
        totalPage: 0,
        totalRecord: 0,
    });

    //-----------------------handle call get Jewelries ---------------------------//
    const { data, isSuccess, isLoading, isError, error } = jewelryApi.useGetJewelriesQuery({
        pageNumber: itemList.pageNumber,
        pageSize: itemList.pageSize,
        data: null,
    });

    useEffect(() => {
        if (isSuccess && data) {
            setitemList(data);
        }
    }, [isSuccess, data]);

    useEffect(() => {
        if (isError) {
            console.log('error load jewelries', error);
        }
    }, [isError]);

    //----------------------- end handle call get Jewelries ---------------------------//

    return (
        <div className="relative h-full">
            <div className="flex items-center">
                <div className="flex flex-1">
                    {tabs.map((t) => (
                        <p
                            onClick={() => setselectedTab(t.id)}
                            key={t.id}
                            className={
                                'cursor-pointer select-none px-3 py-2 text-base font-bold uppercase text-white hover:opacity-80 ' +
                                (selectedTab == t.id ? 'bg-secondary-DARK' : 'bg-primary')
                            }
                        >
                            {t.title}
                        </p>
                    ))}
                </div>
                <div className="flex-1">
                    <Input
                        style={{ borderRadius: 0, borderColor: '#5DA19F' }}
                        placeholder="Nhập mã hàng hoặc tên hàng để tìm kiếm"
                    />
                </div>
            </div>
            <div className="flex h-9 items-center justify-end !bg-secondary-DARK py-[1px]">
                {selectedTab == tabs[1].id && (
                    <div className="flex h-full gap-2 text-white">
                        <div
                            onClick={() => setselectedSubTab(1)}
                            className={
                                'flex h-full cursor-pointer items-center px-2 hover:bg-black/10 ' +
                                (selectedSubTab == 1 ? '!bg-white text-black' : '')
                            }
                        >
                            <p className="select-none">Tất cả hàng hóa</p>
                        </div>
                        <Popover content={<ProverCategory />} showArrow trigger="click">
                            <div className="flex h-full cursor-pointer items-center gap-1 px-2 hover:bg-black/10">
                                <FaTags />
                                <p className="select-none">Nhóm hàng</p>
                                <FaCaretDown />
                            </div>
                        </Popover>
                    </div>
                )}
            </div>
            <div className="flex flex-wrap gap-1 p-2 pr-4">
                {/* display items */}
                {!isLoading &&
                    data &&
                    itemList.data.map((item, index) => (
                        <Item
                            onItemClick={() => dispatch(addToCart({ item, quantity: 1 }))}
                            item={item}
                            key={index}
                        />
                    ))}
                {isLoading && (
                    <div className="flex flex-1 items-center justify-center">
                        <Spin size="large" />
                    </div>
                )}
                {/* display pagging  */}
                {itemList.pageNumber > 1 && (
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white text-primary hover:text-sky-300">
                        <FaChevronCircleLeft size={50} />
                    </div>
                )}
                {itemList.pageNumber < itemList.totalPage && (
                    <div className="absolute right-0 top-1/2 -translate-x-[10px] -translate-y-1/2 cursor-pointer rounded-full bg-white text-primary hover:text-sky-300">
                        <FaChevronCircleRight size={50} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ItemList;
