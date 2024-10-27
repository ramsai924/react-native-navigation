import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Categories from './screens/Categories';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoryOverView from './screens/CategoryOverView';
import MealDetails from './screens/MealDetails';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>  
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: 'grey',
            headerStyle: { backgroundColor: '#e0e2f8' },
          }}
        >
          <Stack.Screen 
            name='Categories' 
            component={Categories}
            // Option one to keep options on screen
            // options={{
            //   title: 'All categories',
            //   // contentStyle: { backgroundColor: 'grey' } //Used for changing screen styles eg: styles
            // }}
          />
          <Stack.Screen name='CategoryOverview' component={CategoryOverView} />
          <Stack.Screen name='mealDetails' component={MealDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>  
  );
}

const styles = StyleSheet.create({

});
