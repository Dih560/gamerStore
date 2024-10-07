import OrderItem from "./OrderItem";
import OrderShipping from "./OrderShipping";
import { PaymentMethod } from "./PaymentMethod";
import { Status } from "./Status";

export default interface Order {
    id: number;
    date: Date;
    items: OrderItem[];
    total: number;
    status: Status;
    paymentMethod: PaymentMethod;
    shipping: OrderShipping;
}