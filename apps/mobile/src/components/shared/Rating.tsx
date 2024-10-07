import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'

export interface RatingProps {
    rating: number
    size?: number
}

export default function Rating(props: RatingProps) {
    function ratingParaEstrelas(rating: number) {
        const estrelas: any[] = []
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                estrelas.push(
                    <Ionicons
                        key={i}
                        name="star"
                        size={16}
                        style={styles.icon}
                    />,
                )
            } else if (rating >= i - 0.5) {
                estrelas.push(
                    <Ionicons
                        key={i}
                        name="star-half"
                        size={16}
                        style={styles.icon}
                    />,
                )
            } else {
                estrelas.push(
                    <Ionicons
                        key={i}
                        name="star-outline"
                        size={16}
                        style={styles.icon}
                    />,
                )
            }
        }
        return estrelas
    }

    return <View style={styles.container}>{ratingParaEstrelas(props.rating)}</View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 0.5,
        color: '#34d399',
    },
    icon: {
        color: '#34d399',
    },
})
