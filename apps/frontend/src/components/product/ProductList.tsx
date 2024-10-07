'use client'
import useProducts from '@/data/hooks/useProducts'
import ProductItem from './ProductItem'
import ProductNotFound from './ProdutoNaoEncontrado'

export default function ProductList() {
    const { products } = useProducts()

    if (!products.length) return <ProductNotFound hideBack />

    return (
        <div
            className="
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
            "
        >
            {products.map((product) => (
                <ProductItem product={product} key={product.id} />
            ))}
        </div>
    )
}
