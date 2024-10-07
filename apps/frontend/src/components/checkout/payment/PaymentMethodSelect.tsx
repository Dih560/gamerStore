import { PaymentMethod } from "@gstore/core";

export interface PaymentMethodSelectProps {
    paymentMethod?: PaymentMethod;
    onChange?: (value: PaymentMethod) => void;
    className?: string
}

export default function PaymentMethodSelect(props: PaymentMethodSelectProps) {
    function renderItem(label: string, type: PaymentMethod) {
        const selected = props.paymentMethod === type

        return (
            <button
                className="flex items-center gap-3 bg-violet-dark rounded-lg h-12 px-7"
                onClick={() => props.onChange?.(type)}
            >
                <span
                    className={`
                        ${selected ? 'bg-emerald-500 border-emerald-500' : 'bg-transparent border-white'}
                        w-5 h-5 border-2 rounded-full
                    `}
                ></span>
                <span>{label}</span>
            </button>
        )
    }

    return (
        <div className={`flex flex-col gap-3 ${props.className ?? ''}`}>
            <span className="px-7 pb-2 text-xl font-bold text-white/70">
                Forma de Pagamento
            </span>
            <div className="flex flex-col gap-3">
                {renderItem('Pagamento no PIX', PaymentMethod.PIX)}
                {renderItem('Boleto Bancário', PaymentMethod.INVOICE)}
                {renderItem('Cartão de Crédito', PaymentMethod.CARD)}
            </div>
        </div>
    )
}