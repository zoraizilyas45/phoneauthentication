import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const PhoneAuthScreen = ({ navigation }) => {
  const [confirm, setConfirm] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [codeInput, setCodeInput] = useState('');

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.error('Error sending code:', error);
    }
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(codeInput);
      console.log('Code Confirmed!');
     
      navigation.navigate('Home'); 
    } catch (error) {
      console.error('Error confirming code:', error);
      
    }
  };

  // const movehome=()=>{
  //   navigation.navigate('Home')
  // }

  return (
    <View style={{ top: 30 }}>
      <View style={{ top: 4 }}>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <TouchableOpacity style={styles.btn} onPress={signInWithPhoneNumber}>
          <Text style={styles.text}>Send Code</Text>
        </TouchableOpacity>
      </View>

      <View style={{ top: 30 }}>
        <TextInput
          style={styles.input}
          placeholder="Enter verification code"
          keyboardType="numeric"
          value={codeInput}
          onChangeText={(text) => setCodeInput(text)}
        />
        <TouchableOpacity style={styles.btn} onPress={confirmCode}>
          <Text style={styles.text}>Confirm Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhoneAuthScreen;

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    height: 35,
    backgroundColor: 'green',
    top: 20,
  },
  text: {
    textAlign: 'center',
    top: 5,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 4,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    top: 10,
    padding: 10,
  },
});
