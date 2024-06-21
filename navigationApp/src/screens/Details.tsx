import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

// NAVIGATION for screen props
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import {RootStackParamList} from '../App'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>
export default function Details({route}: DetailsProps) {

    const { ProductId} = route.params

    // using the useNavigation Hook
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product Id</Text>
      <Text style={styles.text}>{ProductId}</Text>
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