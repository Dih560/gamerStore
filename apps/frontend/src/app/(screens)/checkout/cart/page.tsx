'use client'
import CartEmpty from "@/components/checkout/cart/CartEmpty"
import CartItem from "@/components/checkout/cart/CartItem"
import TotalCart from "@/components/checkout/cart/TotalCart"
import HeaderCheckout from "@/components/checkout/HeaderCheckout"
import useCart from "@/data/hooks/useCart"

export default function Cart() {
    const {
        items,
        totalItems,
        totalPromotionalValue,
        addItem,
        removeItem,
        removeProduct
    } = useCart()

    return (
        <div className="flex-1 flex flex-col gap-5 container">
            {totalItems > 0 && <HeaderCheckout step="cart" />}
            <div className="flex-1 flex flex-col gap-5">
                {totalItems === 0 && <CartEmpty />}
                {items.map(item => (
                    <CartItem
                        key={item.product.id}
                        item={item}
                        addItem={() => addItem(item.product)}
                        removeItem={() => removeItem(item.product)}
                        removeProduct={() => removeProduct(item.product)}
                    />
                ))}
            {totalItems > 0 && <TotalCart totalItems={totalItems} totalValue={totalPromotionalValue} />}
            </div>
        </div>
    )
}