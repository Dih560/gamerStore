import { StyleSheet, Text, ScrollView } from 'react-native'
import HeaderCheckout from '@/src/components/checkout/HeaderCheckout'
import ShippingForm from '@/src/components/checkout/payment/ShippingForm'
import PaymentResume from '@/src/components/checkout/payment/PaymentResume'
import PaymentMethodSelect from '@/src/components/checkout/payment/PaymentMethodSelect'
import useCart from '@/src/data/hooks/useCart'
import usePayment from '@/src/data/hooks/usePayment'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Payment() {
    const { installment, totalItems, totalPromotionalValue, totalBaseValue } = useCart()
    const { shipping, paymentMethod, updateShipping, updatePaymentMethod, finishPurchase } = usePayment()

    return (
        <SafeAreaView style={styles.container}>
            <HeaderCheckout step="payment" />
            <ScrollView contentContainerStyle={styles.containerScroll}>
                <Text style={styles.title}>Forma de Pagamento</Text>
                <PaymentMethodSelect
                    paymentMethod={paymentMethod}
                    onChange={updatePaymentMethod}
                />

                <Text style={styles.title}>Dados da Entrega</Text>
                <ShippingForm shipping={shipping} onChange={updateShipping} />
            </ScrollView>

            <PaymentResume
                totalItems={totalItems}
                totalPromotionalValue={totalPromotionalValue}
                totalBaseValue={totalBaseValue}
                installment={installment}
                finishPurchase={finishPurchase}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E001D',
    },
    containerScroll: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
})
