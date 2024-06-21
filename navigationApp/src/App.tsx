

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
 Details: { ProductId: string }

};

// Navigation configuration
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
});

export default App;
