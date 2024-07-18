import { useState } from 'react';
import SelectBuyBackOptionsModel from '../../components/SelectBuyBackOptionsModel';

const BuyBackPage = () => {
    const [showBuyBackOptions, setshowBuyBackOptions] = useState(true);
    return (
        <div className="mt-1 flex flex-1 flex-col gap-2">
            <div className="flex flex-1 bg-white">
                <SelectBuyBackOptionsModel open={showBuyBackOptions} />
            </div>
        </div>
    );
};

export default BuyBackPage;
