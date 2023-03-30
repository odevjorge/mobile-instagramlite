import {SafeAreaView, StatusBar, StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Router from "./src/routes/router";
import 'react-native-gesture-handler';


export default function App() {
    return (
        <SafeAreaView style={styles.container}>
                <StatusBar barStyle={'dark-content'}/>
                <NavigationContainer>
                    <Router/>
                </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});