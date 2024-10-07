'use client'
import HeaderCheckout from "@/components/checkout/HeaderCheckout"
import PaymentMethodSelect from "@/components/checkout/payment/PaymentMethodSelect"
import PaymentResume from "@/components/checkout/payment/PaymentResume"
import ShippingForm from "@/components/checkout/payment/ShippingForm"
import useCart from "@/data/hooks/useCart"
import usePayment from "@/data/hooks/usePayment"

export default function Payment() {
    const { installment, totalItems, totalPromotionalValue, totalBaseValue } = useCart()
    const { shipping, paymentMethod, updateShipping, updatePaymentMethod, finishPurchase } = usePayment()

    return (
        <div className="flex flex-col gap-7 container">
            <HeaderCheckout step="payment" />
            <div className="flex gap-5">
                <div className="flex-1 flex flex-col gap-5">
                    <PaymentMethodSelect
                        paymentMethod={paymentMethod}
                        onChange={updatePaymentMethod}
                    />
                    <ShippingForm shipping={shipping} onChange={updateShipping} />
                </div>
                <PaymentResume
                    totalItems={totalItems}
                    totalPromotionalValue={totalPromotionalValue}
                    totalBaseValue={totalBaseValue}
                    installment={installment}
                    finishPurchase={finishPurchase}
                    className="mt-12"
                />
            </div>
        </div>
    )
}