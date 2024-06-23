import { Jewelry } from '../types/jewelry.type';

interface ItemProps {
    item: Jewelry;
    onItemClick?: () => void;
}

const Item = ({ item, onItemClick }: ItemProps) => {
    return (
        <div
            onClick={onItemClick}
            className="flex max-w-[200px] cursor-pointer select-none items-center gap-2 rounded-md border-[1px] border-[#ccc] p-2 hover:bg-gray"
        >
            <img
                src={item.imageUrl}
                className="h-[70px] max-h-[70px] w-[70px] max-w-[70px] overflow-hidden object-cover"
            />
            <div className="flex flex-col justify-between">
                <p className="text-wrap text-sm font-semibold text-gray-600">{item.name}</p>
                <div>
                    <p className="text-sm text-primary">{item.type}</p>
                    <p className="text-sm text-red-500">{item.jewelryPrice}$</p>
                </div>
            </div>
        </div>
    );
};

export default Item;
