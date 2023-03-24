import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Auth from './src/pages/accounts/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

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
    textColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    color: '#fff',
  }
});
