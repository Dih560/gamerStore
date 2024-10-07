import { OrderShipping } from '@gstore/core'
import { TextInput, StyleSheet, View } from 'react-native'
import React from 'react'

export interface ShippingFormProps {
    shipping: Partial<OrderShipping>
    onChange: (shipping: Partial<OrderShipping>) => void
    className?: string
}

export default function ShippingForm(props: ShippingFormProps) {
    const { shipping, onChange } = props

    function alterarAtributo(atributo: string) {
        return (valor: any) => {
            onChange({ ...shipping, [atributo]: valor })
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome Completo"
                value={shipping.name}
                onChangeText={alterarAtributo('name')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={shipping.email}
                onChangeText={alterarAtributo('email')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="CPF"
                value={shipping.cpf}
                onChangeText={alterarAtributo('cpf')}
                keyboardType="numeric"
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Logradouro"
                value={shipping.address}
                onChangeText={alterarAtributo('address')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Complemento"
                value={shipping.complement}
                onChangeText={alterarAtributo('complement')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Cidade"
                value={shipping.city}
                onChangeText={alterarAtributo('city')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Estado"
                value={shipping.state}
                onChangeText={alterarAtributo('state')}
                placeholderTextColor="#999"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#fff',
    },
    input: {
        height: 40,
        width: 300,
        color: '#fff',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#241440',
    },
})
