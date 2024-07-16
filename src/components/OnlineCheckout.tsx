import { message, Skeleton } from 'antd';
import { useState } from 'react';
import { CheckoutOnlineRespone } from '../types/bill.type';
import IframeComponent from './IframeComponent';

interface OnlineCheckoutProps {
    data?: CheckoutOnlineRespone;
    isLoading: boolean;
    onPaymentSuccess: () => void;
}

type Status = 'pending' | 'success' | 'failed';

function OnlineCheckout({ data, isLoading, onPaymentSuccess }: OnlineCheckoutProps) {
    const [paymentStatus, setPaymentStatus] = useState<Status>('pending');
    const [messageApi, contextHolder] = message.useMessage();

    const onUrlChange = (url: string) => {
        if (url.includes('Complete')) {
            setPaymentStatus('success');
            onPaymentSuccess();
        } else {
            setPaymentStatus('failed');
            messageApi.success('Thanh toán thất bại');
        }
    };

    return (
        <div>
            {contextHolder}
            {isLoading && <Skeleton active />}
            {!isLoading && data && paymentStatus === 'pending' && (
                <IframeComponent url={data.checkoutUrl} onUrlChange={onUrlChange} />
            )}
            {paymentStatus == 'success'}
        </div>
    );
}

export default OnlineCheckout;
