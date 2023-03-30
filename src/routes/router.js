import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Auth from "../pages/accounts/auth";
import Login from "../pages/accounts/login";
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";


const Stack = createStackNavigator();
export default function Router() {
    return (<>
        <Stack.Navigator>
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    </>);
}