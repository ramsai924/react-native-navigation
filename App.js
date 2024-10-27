import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>  
      <StatusBar style='auto' />
      <NavigationContainer>
       <View><Text>Hello</Text></View>
      </NavigationContainer>
    </>  
  );
}

const styles = StyleSheet.create({

});
