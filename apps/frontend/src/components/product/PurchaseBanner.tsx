'use client'
import { Product, Currency } from "@gstore/core";
import useInstallment from "@/data/hooks/useInstallment";
import { IconCreditCard, IconShoppingCartPlus } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import useCart from "@/data/hooks/useCart";

export interface PurchaseBannerProps {
    product: Product
}

export default function PurchaseBanner(props: PurchaseBannerProps) {
    const router = useRouter()
    const { product } = props
    const { addItem } = useCart()
    const installment = useInstallment(product.promotionalPrice, 12)

    return (
        <div className="flex">
            <div className="flex flex-col border-r border-zinc-500 pr-5">
                <div className="line-through text-zinc-400">de {Currency.format(product.basePrice)}</div>
                <div className="text-2xl font-semibold">
                    <span className="text-base text-zinc-300">por</span>{' '}
                    <span className="text-emerald-500">{Currency.format(product.promotionalPrice)}</span>{' '}
                    <span className="text-base text-zinc-300">à vista</span>
                </div>
            </div>
            <div className="flex-1 flex flex-col text-2xl font-semibold text-zinc-400 pl-5">
                <span className="text-base text-zinc-300">{installment.quantity}x de</span>
                {Currency.format(installment.value)}{' '}
            </div>
            <div className="flex gap-2 items-center">
                <button
                    className="flex-1 button bg-pink-600"
                    onClick={() => addItem(product)}
                >
                    <IconShoppingCartPlus size={20} />
                    <span>Adicionar</span>
                </button>
                <button
                    className="flex-1 button bg-violet-700"
                    onClick={() => {
                        addItem(product)
                        router.push('/checkout/payment')
                    }}
                >
                    <IconCreditCard size={20} />
                    <span>Comprar</span>
                </button>
            </div>
        </div>
    )
}