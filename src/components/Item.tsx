import { useState } from 'react';
import { Jewelry } from '../types/jewelry.type';
import { FaCheckCircle } from 'react-icons/fa';
import { formatNumber } from '../utils/formater';

interface ItemProps {
    item: Jewelry;
    onItemClick?: () => void;
}

const Item = ({ item, onItemClick }: ItemProps) => {
    const [showIcon, setshowIcon] = useState(false);
    return (
        <div
            onClick={onItemClick}
            onMouseEnter={() => setshowIcon(true)}
            onMouseLeave={() => setshowIcon(false)}
            className="relative flex h-[100px] max-h-[100px] min-w-[190px] max-w-[190px] cursor-pointer select-none items-center gap-2 rounded-md border-[1px] border-[#ccc] p-2 hover:bg-gray"
        >
            {showIcon && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
                    <FaCheckCircle size={35} className="text-primary" />
                </div>
            )}

            <img
                src={item.imageUrl}
                className="h-[70px] max-h-[70px] w-[70px] min-w-[70] max-w-[70px] overflow-hidden object-cover"
            />
            <div className="flex h-full flex-1 flex-col justify-between">
                <p className="line-clamp-2 truncate text-wrap text-sm font-semibold capitalize text-[#333]">
                    {item.name}
                </p>
                <div>
                    <p className="text-wrap text-sm text-primary">{item.type}</p>
                    <p className="text-sm font-medium text-red-400">
                        {formatNumber(item.totalPrice + '')}$
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Item;
