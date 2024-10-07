import { CartProvider } from '@/src/data/contexts/CartContext';
import { PaymentProvider } from '@/src/data/contexts/PaymentContext';
import { ProductsProvider } from '@/src/data/contexts/ProductsContext';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabsScreen from '../tabs';
import ProductDetails from './PorductDetails';
import Payment from './Payment';
import LastPurchases from './LastPurchases';

const Stack = createNativeStackNavigator()

export default function StackScreen() {
    return (
        <ProductsProvider>
            <CartProvider>
                <PaymentProvider>
                    <NavigationContainer theme={DarkTheme}>
                        <Stack.Navigator initialRouteName='Tabs' screenOptions={{
                            headerBackTitle: 'Voltar',
                            headerStyle: { backgroundColor: '#0D001E' },
                            headerTintColor: '#FFF'
                        }}>
                            <Stack.Screen
                                name='Tabs'
                                component={TabsScreen}
                                options={{
                                    headerShown: false
                                }}
                            />
                            <Stack.Screen
                                name='ProductDetails'
                                component={ProductDetails}
                                options={{
                                    title: 'Detalhes do Produto',
                                }}
                            />
                            <Stack.Screen
                                name='Payment'
                                component={Payment}
                                options={{
                                    title: 'Detalhes do Pagamento',
                                }}
                            />
                            <Stack.Screen
                                name='LastPurchases'
                                component={LastPurchases}
                                options={{
                                    title: 'Últimas Compras',
                                }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </PaymentProvider>
            </CartProvider>
        </ProductsProvider>
    )
}