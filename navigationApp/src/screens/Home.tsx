import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

// NAVIGATION for screen props
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import {RootStackParamList} from '../App'

// setting up type safety
 type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function Home({navigation}: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {ProductId: '60'})}
      />

      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF2F2',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000'
    }
})
