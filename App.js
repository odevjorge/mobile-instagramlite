import {SafeAreaView, StyleSheet, View} from 'react-native';
import Auth from './src/pages/accounts/auth';


export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{backgroundColor: '#ffff', width: '90%'}}>
                <Auth/>
            </View>
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
    baseText: {
        color: '#fff',
    }
});
