import React, {PropsWithChildren, useState} from 'react';

import {
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// importing the images
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';
import RNHapticFeedback from 'react-native-haptic-feedback';

// imageSourcePropType - to pass on images
type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

// A DICE IMAGE COMPONENT
const Dice = ({imageUrl}: DiceProps): React.JSX.Element => {
  return (
    <View style={styles.diceContainer}>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
};

// Optional configuration - For the Haptic Feedback
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};



function App(): React.JSX.Element {
  const [diceImg, setDiceImg] = useState(DiceOne);

  // rendering the images randomly 
  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImg(DiceOne)
        break;
      case 2:
        setDiceImg(DiceTwo)
        break;
      case 3:
        setDiceImg(DiceThree)
        break;
      case 4:
        setDiceImg(DiceFour)
        break;
      case 5:
        setDiceImg(DiceFive)
        break;
      case 6:
        setDiceImg(DiceSix)
        break;
    
      default:
        setDiceImg(DiceOne)
        break;
    }
     // Trigger haptic feedback
    RNHapticFeedback.trigger("impactLight", options);
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImg} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>
          Roll the Dice
        </Text>
      </Pressable>
    </View>
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
