'use client'
import { Order, OrderItem, OrderShipping, PaymentMethod, Status } from "@gstore/core";
import { createContext, ReactNode, useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import useCart from "../hooks/useCart";
import useLocalStorage from "../hooks/useLocalStorage";

export interface PaymentContextProps {
    paymentMethod: PaymentMethod;
    shipping: Partial<OrderShipping>;
    updatePaymentMethod: (paymentMethod: PaymentMethod) => void;
    updateShipping: (shipping: Partial<OrderShipping>) => void;
    finishPurchase: () => void;
}

const PaymentContext = createContext<PaymentContextProps>({} as any)

interface ProviderProps {
    children: ReactNode
}

export function PaymentProvider(props: ProviderProps) {
    const { httpPost } = useAPI()
    const { items, totalPromotionalValue, cleanCart } = useCart()
    const { setItem, getItem } = useLocalStorage()
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.PIX)
    const [shipping, setShipping] = useState<Partial<OrderShipping>>({})

    function updatePaymentMethod(paymentMethod: PaymentMethod) {
        setItem('paymentMethod', paymentMethod)
        setPaymentMethod(paymentMethod)
    }

    function updateShipping(shipping: Partial<OrderShipping>) {
        setItem('shipping', shipping)
        setShipping(shipping)
    }

    async function finishPurchase() {
        const order: Partial<Order> = {
            date: new Date(),
            paymentMethod,
            total: totalPromotionalValue,
            shipping: shipping as OrderShipping,
            status: Status.RECEIVED,
            items: items.map((item => ({
                product: item.product,
                quantity: item.quantity,
                unityPrice: item.product.promotionalPrice
            }) as OrderItem))
        }

        await httpPost('orders', order)
        cleanCart()
    }

    useEffect(() => {
        getItem('shipping')
            .then(shipping => setShipping(shipping ?? {}))

        getItem('paymentMethod')
            .then(paymentMethod => setPaymentMethod(paymentMethod ?? {}))
    }, [getItem])

    return (
        <PaymentContext.Provider
            value={{
                shipping,
                paymentMethod,
                updateShipping,
                updatePaymentMethod,
                finishPurchase
            }}
        >
            {props.children}
        </PaymentContext.Provider>
    )
}

export default PaymentContext