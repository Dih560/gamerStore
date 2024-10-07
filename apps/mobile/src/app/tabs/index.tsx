import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native'
import Init from './Init'
import Cart from './Cart'
import User from './User'

const Tab = createBottomTabNavigator()

export default function TabsScreen() {
    function tab(nome: string, componente: any, label: string, icon: string) {
        return (
            <Tab.Screen
                name={nome}
                component={componente}
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabScreen}>
                            <Ionicons
                                name={icon as any}
                                size={22}
                                color={focused ? '#FFF' : '#CCC'}
                            />
                            <Text
                                style={{
                                    ...styles.tabScreenText,
                                    color: focused ? '#FFF' : '#CCC',
                                }}
                            >
                                {label}
                            </Text>
                        </View>
                    ),
                }}
            />
        )
    }

    return (
        <Tab.Navigator
            initialRouteName="Init"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor: '#7811F5',
                tabBarInactiveBackgroundColor: '#7811F5',
                tabBarStyle: {
                    backgroundColor: '#7811F5',
                },
            }}
        >
            {tab('Init', Init, 'Início', 'home-outline')}
            {tab('Cart', Cart, 'Carrinho', 'cart-outline')}
            {tab('User', User, 'Perfil', 'person-outline')}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabScreen: {
        alignItems: 'center',
    },
    tabScreenText: {
        fontSize: 14,
    },
})