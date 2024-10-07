import PriceMeter from "@/components/product/PriceMeter"
import ProductDetails from "@/components/product/ProductDetails"
import ProductTitle from "@/components/product/ProductTitle"
import ProductNotFound from "@/components/product/ProdutoNaoEncontrado"
import ProfessionalAvaliation from "@/components/product/ProfessionalAvaliation"
import PurchaseBanner from "@/components/product/PurchaseBanner"
import UserAvaliation from "@/components/product/UserAvaliation"
import { products } from "@gstore/core"

export default function Product(props: any) {
    const id = +props.params.id
    const product = products.find(product => product.id === id)

    if (!product) return <ProductNotFound />

    return (
        <div className="flex flex-col gap-20 container py-10">
            <div className="flex flex-col gap-10">
                <ProductTitle product={product} />
                <ProductDetails product={product} />
                <PurchaseBanner product={product} />
                <PriceMeter product={product} />
            </div>

            <UserAvaliation product={product} />
            <ProfessionalAvaliation product={product} />
        </div>
    )
}