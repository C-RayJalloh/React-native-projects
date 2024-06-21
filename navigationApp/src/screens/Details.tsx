import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

// NAVIGATION for screen props
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import {RootStackParamList} from '../App'

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>
export default function Details({navigation}: DetailsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Page</Text>
      <Text style={styles.text}>{}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
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