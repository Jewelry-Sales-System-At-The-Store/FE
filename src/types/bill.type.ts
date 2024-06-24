import { JewelryID } from './jewelry.type';
import { Promotion, PromotionID } from './promotion.type';

export interface Bill {
    id: string;
    billId: string;
    customerName: string;
    staffName: string;
    totalAmount: number;
    totalDiscount: number;
    saleDate: string;
    items: Item[];
    promotions: Promotion[];
    additionalDiscount: number;
    pointsUsed: number;
    finalAmount: number;
}

export interface Item {
    jewelryId: string;
    name: string;
    jewelryPrice: number;
    laborCost: number;
    totalPrice: number;
}

export interface CreateBillRequest {
    customerId: string;
    userId: string;
    counterId: string;
    additionalDiscount: number;
    jewelries: JewelryID[];
    promotions: PromotionID[];
}
