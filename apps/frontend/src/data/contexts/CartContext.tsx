'use client'
import { CalcInstallment, Cart, CartItem, Installment, Product } from "@gstore/core"
import { createContext, ReactNode, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export interface CartContextProps {
    items: CartItem[];
    totalItems: number;
    totalBaseValue: number;
    totalPromotionalValue: number;
    installment: Installment;
    addItem: (product: Product) => void;
    removeItem: (product: Product) => void;
    removeProduct: (product: Product) => void;
    cleanCart: () => void;
}

interface ProviderProps {
    children: ReactNode
}

const CartContext = createContext<CartContextProps>({} as any)

export function CartProvider(props: ProviderProps) {
    const { setItem, getItem } = useLocalStorage()
    const [cart, setCart] = useState<Cart>(new Cart())

    function updateCart(cart: Cart) {
        setItem('cart', cart.items)
        setCart(cart)
    }

    function addItem(product: Product) {
        updateCart(cart.addItem(product))
    }

    function removeItem(product: Product) {
        updateCart(cart.removeItem(product))
    }

    function removeProduct(product: Product) {
        updateCart(cart.removeProduct(product))
    }

    function cleanCart() {
        updateCart(cart.clean())
    }

    useEffect(() => {
        const savedItems: CartItem[] = getItem('cart')
        if (savedItems) setCart(new Cart(savedItems))
    }, [getItem])

    return (
        <CartContext.Provider
            value={{
                items: cart.items,
                totalItems: cart.totalItems,
                totalPromotionalValue: cart.totalPromotionalValue,
                totalBaseValue: cart.totalBaseValue,
                installment: new CalcInstallment().execute(cart.totalPromotionalValue),
                addItem,
                removeItem,
                removeProduct,
                cleanCart
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext