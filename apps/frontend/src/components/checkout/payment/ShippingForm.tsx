import { OrderShipping } from '@gstore/core'

export interface ShippingFormProps {
    shipping: Partial<OrderShipping>
    onChange: (shipping: Partial<OrderShipping>) => void
    className?: string
}

export default function ShippingForm(props: ShippingFormProps) {
    const { shipping, onChange } = props

    function handleChange(attribute: string) {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange({ ...shipping, [attribute]: e.target.value })
        }
    }

    return (
        <div className={`flex flex-col gap-3 ${props.className ?? ''}`}>
            <span className="px-7 pb-2 text-xl font-bold text-white/70">
                Dados da Entrega
            </span>
            <div className="flex flex-col gap-5 bg-violet-dark/50 rounded-xl p-6">
                <input
                    placeholder="Nome Completo"
                    value={shipping.name}
                    onChange={handleChange('name')}
                    className="input"
                />
                <div className="flex gap-5">
                    <input
                        placeholder="E-mail"
                        value={shipping.email}
                        onChange={handleChange('email')}
                        className="input flex-1"
                    />
                    <input
                        placeholder="CPF"
                        value={shipping.cpf}
                        onChange={handleChange('cpf')}
                        className="input flex-1"
                    />
                </div>
                <div className="flex gap-5">
                    <input
                        placeholder="Logradouro"
                        value={shipping.address}
                        onChange={handleChange('address')}
                        className="input flex-1"
                    />
                    <input
                        placeholder="Complemento"
                        value={shipping.complement}
                        onChange={handleChange('complement')}
                        className="input"
                    />
                </div>
                <div className="flex gap-5">
                    <input
                        placeholder="Cidade"
                        value={shipping.city}
                        onChange={handleChange('city')}
                        className="input flex-1"
                    />
                    <input
                        placeholder="Estado"
                        value={shipping.state}
                        onChange={handleChange('state')}
                        className="input flex-1"
                    />
                </div>
            </div>
        </div>
    )
}