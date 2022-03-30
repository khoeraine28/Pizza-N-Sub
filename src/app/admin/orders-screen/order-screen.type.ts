import { PersonalInformation } from "src/app/order/order-stepper/order-type/order.type";

export interface OrderRow {
    customerInfo: PersonalInformation;
    date: Date;
    id: string;
}