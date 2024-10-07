'use client'
import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { FilterProducts, Product } from "@gstore/core";
import useAPI from "../hooks/useAPI";

export interface ProductsContextProps {
    products: Product[];
    search: string;
    setSearch: (search: string) => void;
    find: (id: number) => Product | null
}

interface ProviderProps {
    children: ReactNode
}

const ProductsContext = createContext<ProductsContextProps>({} as any)

export function ProductsProvider(props: ProviderProps) {
    const { httpGet } = useAPI()
    const [search, setSearch] = useState<string>('')
    const [products, setProducts] = useState<Product[]>([])

    const loadProducts = useCallback(async () => {
        const products = await httpGet('products')
        setProducts(products ?? [])
    }, [httpGet])

    useEffect(() => {
        loadProducts()
    }, [loadProducts])

    return (
        <ProductsContext.Provider
            value={{
                search,
                get products() {
                    if (!search) return products
                    return new FilterProducts().execute(search, products)
                },
                setSearch,
                find: (id: number) =>
                    products.find(product => product.id === id) ?? null
            }}
        >
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext