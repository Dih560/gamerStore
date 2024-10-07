import { Ionicons } from "@expo/vector-icons";
import Colors from "@/src/data/constants/Colors";
import { Alert, Pressable, StyleSheet, Text } from "react-native";
import Profile from "@/src/components/profile/Profile";
import { SafeAreaView } from "react-native-safe-area-context";

export default function User({navigation}: any) {
    return (
        <SafeAreaView style={styles.container}>
            <Profile name="Diego Almeida" email="teste2teste.com" phone="(19) 9 9909-9999" />
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('LastPurchases')}
            >
                <Ionicons name="cart-outline" size={22} style={styles.buttonText} />
                <Text style={styles.buttonText}>últimas Compras</Text>
            </Pressable>
            <Pressable
                style={styles.buttonLogout}
                onPress={() => Alert.alert('Logout', 'Logout feito com sucesso!', [{  text: 'OK' }])}
            >
                <Ionicons name="log-out-outline" size={22} style={styles.buttonText} />
                <Text style={styles.buttonText}>Logout</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E001D',
        width: '100%',
    },
    button: {
        color: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY,
        alignSelf: 'center',
        borderRadius: 9999,
        height: 40,
        marginVertical: 20,
        paddingHorizontal: 50,
        gap: 8,
    },
    buttonLogout: {
        color: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff3030',
        alignSelf: 'center',
        borderRadius: 9999,
        height: 40,
        marginVertical: 20,
        paddingHorizontal: 50,
        gap: 8,
    },
    buttonText: {
        color: '#FFF',
    },
})