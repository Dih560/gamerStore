import { Ionicons } from '@expo/vector-icons'
import { Currency, Installment } from '@gstore/core'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Colors from '@/src/data/constants/Colors'

export interface PaymentResumeProps {
    totalItems: number
    totalPromotionalValue: number
    totalBaseValue: number
    installment: Installment
    finishPurchase: () => void
    className?: string
}

export default function PaymentResume(props: PaymentResumeProps) {
    return (
        <View style={styles.container}>
            <View style={styles.valorItens}>
                <Text style={{ color: 'white' }}>Valor total ({props.totalItems} itens): </Text>
                <Text style={styles.itemEmphasisValue}>{Currency.format(props.totalPromotionalValue)}</Text>
            </View>
            <Pressable style={styles.button} onPress={() => props.finishPurchase?.()}>
                <Ionicons name="cart-outline" size={22} style={styles.buttonText} />
                <Text style={styles.buttonText}>Finalizar Compra</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
        paddingHorizontal: 60,
        paddingVertical: 20,
        backgroundColor: '#241440',
        borderRadius: 10,
        gap: 10,
    },
    valorItens: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemEmphasisValue: {
        color: '#34d399',
        fontWeight: 'bold',
    },
    button: {
        color: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY,
        borderRadius: 9999,
        height: 40,
        paddingHorizontal: 45,
        gap: 8,
    },
    buttonText: {
        color: '#FFF',
    },
})
