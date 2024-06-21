

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


// propTypes
export type RootStackParamList = {
  Home: undefined;
 Details: { product: Product }

};

// Navigation configuration
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{
          title: 'Homepage'
        }} />
        <Stack.Screen name="Details" component={Details} options={{
          title: 'Details page'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
});

export default App;
