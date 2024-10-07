import ProductItem from "@/src/components/product/ProductItem";
import useProducts from "@/src/data/hooks/useProducts";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Init({ navigation }: any) {
    const { products } = useProducts()

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingVertical: 20, width: '100%' }}>
                {products.map(product => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onSelect={() => navigation.navigate('ProductDetails', {product})}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E001D',
        width: '100%'
    },
})