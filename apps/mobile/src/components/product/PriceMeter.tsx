import { Fontisto, Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Product } from '@gstore/core'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '@/src/data/constants/Colors'

export interface PriceMeteroProps {
    product: Product
}

export default function PriceMetero(props: PriceMeteroProps) {
    const {
        smallerPrice: min,
        biggerPrice: max,
        promotionalPrice: current,
        mediumPrice: medium,
    } = props.product

    let percentual
    if (current > medium) {
        percentual = ((current - medium) / (max - medium)) * 50 + 50
    } else {
        percentual = (1 - (medium - current) / (medium - min)) * 50
    }

    return (
        <View style={styles.container}>
            <View style={styles.statusPrice}>
                {percentual >= 40 && percentual < 60 ? (
                    <Fontisto
                        name="confused"
                        size={40}
                        style={{ color: '#eab308' }}
                    />
                ) : percentual >= 60 ? (
                    <Fontisto
                        name="mad"
                        size={40}
                        style={{ color: '#ef4444' }}
                    />
                ) : (
                    <Fontisto
                        name="smiley"
                        size={40}
                        style={{ color: '#22c55e' }}
                    />
                )}
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white' }}>
                            O preço do product está{' '}
                        </Text>
                        <Text
                            style={{
                                color: Colors.TEXT_EMPHASIS_1,
                                fontWeight: 'bold',
                            }}
                        >
                            {percentual >= 40 && percentual < 60
                                ? 'na média'
                                : percentual >= 60
                                  ? 'acima da média'
                                  : 'abaixo da média'}
                        </Text>
                    </View>
                    <Text style={{ color: 'white' }}>
                        Com base no preço dos últimos 30 dias.
                    </Text>
                </View>
            </View>
            <View style={{ position: 'relative' }}>
                <LinearGradient
                    colors={['#22c55e', '#facc15', '#ef4444']}
                    start={{ x: 0, y: 0.75 }}
                    end={{ x: 1, y: 0.25 }}
                    style={styles.priceBar}
                ></LinearGradient>
                <View
                    style={{ ...styles.pricePosition, left: `${percentual}%` }}
                >
                    <Ionicons
                        name="chevron-down"
                        size={20}
                        style={{ color: Colors.TEXT_EMPHASIS_1 }}
                    />
                    <View style={styles.circlePriceExt}>
                        <View style={styles.circlePriceInt} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    statusPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    priceBar: {
        position: 'relative',
        height: 7,
        borderRadius: 9999,
    },
    pricePosition: {
        position: 'absolute',
        alignItems: 'center',
        top: -25,
    },
    circlePriceExt: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 18,
        width: 18,
        borderRadius: 9999,
    },
    circlePriceInt: {
        backgroundColor: Colors.TEXT_EMPHASIS_1,
        height: 13,
        width: 13,
        borderRadius: 9999,
    },
})
