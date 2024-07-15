import { Skeleton } from 'antd';
import billApi from '../services/billsApi';

interface OnlineCheckoutProps {
    billId: string;
}

function OnlineCheckout({ billId }: OnlineCheckoutProps) {
    const { currentData, isLoading } = billApi.useCheckoutOnlineQuery(billId);
    return (
        <div>
            {isLoading && <Skeleton active />}
            {!isLoading && currentData && (
                <iframe src={currentData.checkoutUrl} width="400" height="700"></iframe>
            )}
        </div>
    );
}

export default OnlineCheckout;
