import { Product } from "@gstore/core";
import Image from "next/image";
import Specifications from "./Specifications";

export interface ProductDetailsProps {
    product: Product
}

export default function ProductDetails(props: ProductDetailsProps) {
    const { product } = props

    return (
        <div className="flex items-center bg-violet-dark rounded-xl p-5">
            <div className="flex-1 relative flex justify-center h-96">
                <Image
                    src={product.image}
                    fill
                    className="object-cover p-7"
                    alt="Imagem do produto"
                />
            </div>
            <Specifications product={product} />
        </div>
    )
}