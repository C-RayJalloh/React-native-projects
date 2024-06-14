

import React, { PropsWithChildren } from 'react';

import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// importing the images
import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/One.png'
import DiceThree from '../assets/One.png'
import DiceFour from '../assets/One.png'
import DiceFive from '../assets/One.png'

// imageSourcePropType - to pass on images
type DiceProps = PropsWithChildren<{
   imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps): React.JSX.Element {
  return (
    <View style={styles.diceContainer}>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
     
        <View >
        <Text>Hello worldly world</Text>
        </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
