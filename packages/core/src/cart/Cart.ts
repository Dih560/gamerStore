import { Product } from "../product";
import CartItem from "./CartItem";

export default class Cart {
    constructor(readonly items: CartItem[] = []) {}

    addItem(product: Product): Cart {
        const item = this.itemByProduct(product)
        if (item) return new Cart(this.updateItemQuantity(this.items, product, 1))

        return new Cart([...this.items, { product, quantity: 1 }])
    }

    removeItem(product: Product) {
        const item = this.itemByProduct(product)
        if (!item) return this

        return new Cart(this.updateItemQuantity(this.items, product, -1))
    }

    removeProduct(product: Product) {
        const item = this.itemByProduct(product)
        if (!item) return this

        return new Cart(this.items.filter(item => item.product.id !== product.id))
    }

    clean() {
        return new Cart()
    }

    get totalItems() {
        return this.items.map(item => item.quantity).reduce((total, quantity) => total + quantity, 0)
    }

    get totalPromotionalValue() {
        return this.items
            .map(item => item.product.promotionalPrice * item.quantity)
            .reduce((total, value) => total + value, 0)
    }

    get totalBaseValue() {
        return this.items
            .map(item => item.product.basePrice * item.quantity)
            .reduce((total, value) => total + value, 0)
    }

    private itemByProduct(product: Product): CartItem | undefined {
        return this.items.find(item => item.product.id === product.id)
    }

    private updateItemQuantity(
        items: CartItem[],
        product: Product,
        diff: number
    ): CartItem[] {
        return items
            .map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + diff } : i)
            .filter(i => i.quantity > 0)
    }
}