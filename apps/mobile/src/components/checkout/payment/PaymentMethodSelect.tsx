import { PaymentMethod } from '@gstore/core'
import { View, Text, Pressable, StyleSheet } from 'react-native'

export interface PaymentMethodSelectProps {
    paymentMethod?: PaymentMethod
    onChange?: (value: PaymentMethod) => void
    className?: string
}

export default function PaymentMethodSelect(
    props: PaymentMethodSelectProps,
) {
    function renderizarItem(label: string, paymentMethod: PaymentMethod) {
        const selecionado = props.paymentMethod === paymentMethod
        return (
            <Pressable
                key={paymentMethod}
                style={styles.optionContainer}
                onPress={() => props.onChange?.(paymentMethod)}
            >
                <View style={styles.optionSelect}>
                    {selecionado && <View style={styles.selector} />}
                </View>
                <Text style={styles.text}>{label}</Text>
            </Pressable>
        )
    }

    return (
        <View style={styles.container}>
            {renderizarItem('Pagamento no PIX', PaymentMethod.PIX)}
            {renderizarItem('Boleto Bancário', PaymentMethod.INVOICE)}
            {renderizarItem('Cartão de Crédito', PaymentMethod.CARD)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    optionSelect: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#8247E5',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    selector: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#8247E5',
    },
    text: {
        fontSize: 16,
        color: '#FFF',
    },
})
