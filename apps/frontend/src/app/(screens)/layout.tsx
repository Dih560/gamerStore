import Screen from "@/components/template/Screen"
import { CartProvider } from "@/data/contexts/CartContext"
import { PaymentProvider } from "@/data/contexts/PaymentContext"
import { ProductsProvider } from "@/data/contexts/ProductsContext"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export default function Layout(props: Props) {
    return (
        <ProductsProvider>
            <CartProvider>
                <PaymentProvider>
                    <Screen className="overflow-x-hidden">
                        {props.children}
                    </Screen>
                </PaymentProvider>
            </CartProvider>
        </ProductsProvider>
    )
}