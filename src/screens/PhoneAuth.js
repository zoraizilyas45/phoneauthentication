import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const PhoneAuthScreen = () => {
  const navigation = useNavigation();
  const [confirm, setConfirm] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [codeInput, setCodeInput] = useState('');



useEffect(()=>{
const unsubscribe=
auth().onAuthStateChanged((user)=>{
  if(user){
    navigation.navigate('BottomTab');
  }
})
return ()=>unsubscribe();
},[])



  const signInWithPhoneNumber = async () => {
    
    try {
      
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      console.log('Confirmation:', confirmation); 
      if(confirmation){
        setConfirm(confirmation);
      }else{
        console.error("Confirmation object is null");
      }
      
    } catch (error) {
      console.error('Error sending code:', error);
    }
  };

  const confirmCode = async () => {
    try {
      if (confirm) {
        await confirm.confirm(codeInput);
        console.log('Code Confirmed!');
        navigation.navigate('BottomTab');
      } else {
        console.error('Confirmation object is null.');
      }
    } catch (error) {
      console.error('Error confirming code:', error);
    }
  };

  return (
    <View style={{ top: 30 }}>
      <View style={{ top: 4, alignItems: 'center' }}>
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

      <View style={{ top: 30, alignItems: 'center' }}>
        <TextInput
          style={styles.input}
          placeholder="Enter verification code"
          keyboardType="numeric"
          value={codeInput}
          onChangeText={(text) => setCodeInput(text)}
          
        />
        <TouchableOpacity style={styles.btn} onPress={confirmCode} >
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
    borderRadius: 8,
    width: '40%',
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
    width: '90%',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 12,
  },
});
