import SelectBuyBackOptionsModel from '../../components/SelectBuyBackOptionsModel';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CheckBuyBackModel from '../../components/CheckBuyBackModel';

const BuyBackPage = () => {
    const selectedBuyBackMethod = useSelector((state: RootState) => state.buyBack.buyBackMethod);
    const buyBakcJewelry = useSelector((state: RootState) => state.buyBack.jewelry);
    //------------------ call api get buy id ---------------------//

    return (
        <div className="mt-1 flex flex-1 flex-col gap-2">
            <div className="flex flex-1 bg-white">
                <SelectBuyBackOptionsModel open={selectedBuyBackMethod == 0} />
                <CheckBuyBackModel open={selectedBuyBackMethod == 1 && buyBakcJewelry == null} />
            </div>
        </div>
    );
};

export default BuyBackPage;
