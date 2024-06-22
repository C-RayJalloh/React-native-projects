

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


// NAVIGATION
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// SCREENS
import Home from '../src/screens/Home'
import Details from './screens/Details'


// propTypes for the ROUTE
export type RootStackParamList = {
  Home: undefined;
  Details: { product: Product }
};

// here the stack knows what screen will get the type of data
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    // Navigation configuration
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{
          title: 'Trending Products'
        }} />
        <Stack.Screen name="Details" component={Details} options={{
          title: 'Product Details'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
});

export default App;
