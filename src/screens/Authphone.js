import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
const PhoneAuthentication = ()=>{
const [confirmation, setConfirmation] = useState(null); 
const [phoneNumber, setPhoneNumber] = useState(‘ ’); 
const [otp, setOtp] = useState(' ');
//when you successfully use signInWithPhoneNumber to complete the phone authentication process, it may lead to changes in the user's authentication state, triggering the onAuthStateChanged listener if the user is successfully signed in.
 useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async user => {
      if (user) {
       // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if you tries to enter it (do this await confirmation.confirm(otp)), you will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
     // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.


        const token = await user?.getIdToken();
        if (token) {
         // You can perform additional actions here or navigate to the next screen
        }
      }
    });
    return () => {
      unsubscribe();
    };
  }, [ ]);
//this code is for sending otp
const signInWithPhoneNumber = async () => {
if(phoneNumber.length ===0)
	return;
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      if (confirmation) {
        setConfirmation(confirmation);
        }
    } catch (error) {
      console.error(error?.message);
      if (error.code == 'auth/too-many-requests') {
        Alert.alert(
          'We have blocked all requests from this device due to unusual activity. Try again later.',
        );
      } else {
        Alert.alert(
          'Something went wrong!. Please try again later.',
        );
      }
    }
  };
//this code is for validating otp
const confirmCodeHandler = async () => {
    try {
      await confirmation.confirm(otp);
      const idToken = await auth().currentUser.getIdToken(); //this is for getting auth token.
      Alert.alert( 'Phone number confirmed!');
      //  You can perform additional actions here or navigate to the next screen
    } catch (error) {
if (error.code == 'auth/session-expired') {
        Alert.alert(
          'The sms code has expired. Please resend the verification code to try again',
        );
        return;
      } else if (error.code == 'auth/invalid-verification-code') {
        Alert.alert(
          'The verification code is invalid. Please check and enter the correct verification code again.',
        );
      }
      console.log('Error confirming verification code:', error);
       }
  };

return (
    // your code design
  );
};
export default PhoneAuthentication; 
