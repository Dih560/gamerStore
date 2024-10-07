import { useCallback } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function useLocalStorage() {
    const setItem = useCallback(async (key: string, value: any) => {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    }, [])

    const getItem = useCallback(async (key: string) => {
        const value = await AsyncStorage.getItem(key)
        return value ? JSON.parse(value) : null
    }, [])

    const removeItem = useCallback(async (key: string) => {
        await AsyncStorage.removeItem(key)
    }, [])

    return { setItem, getItem, removeItem }
}