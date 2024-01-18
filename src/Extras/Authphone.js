// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import auth from '@react-native-firebase/auth';

// const PhoneAuthentication = () => {
//   const [confirmation, setConfirmation] = useState(null);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOtp] = useState('');

//   useEffect(() => {
//     const unsubscribe = auth().onAuthStateChanged(async (user) => {
//       if (user) {
//         const token = await user?.getIdToken();
//         if (token) {
//           // You can perform additional actions here or navigate to the next screen
//           Alert.alert('Successfully logged in!');
//         }
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const signInWithPhoneNumber = async () => {
//     if (phoneNumber.length === 0) return;

//     try {
//       const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//       if (confirmation) {
//         setConfirmation(confirmation);
//         Alert.alert('Verification code sent!');
//       }
//     } catch (error) {
//       console.error(error?.message);
//       if (error.code === 'auth/too-many-requests') {
//         Alert.alert(
//           'We have blocked all requests from this device due to unusual activity. Try again later.',
//         );
//       } else {
//         Alert.alert('Something went wrong! Please try again later.');
//       }
//     }
//   };

//   const confirmCodeHandler = async () => {
//     try {
//       await confirmation.confirm(otp);
//       const idToken = await auth().currentUser.getIdToken();
//       Alert.alert('Phone number confirmed!');
//       // You can perform additional actions here or navigate to the next screen
//     } catch (error) {
//       if (error.code === 'auth/session-expired') {
//         Alert.alert(
//           'The sms code has expired. Please resend the verification code to try again',
//         );
//         return;
//       } else if (error.code === 'auth/invalid-verification-code') {
//         Alert.alert(
//           'The verification code is invalid. Please check and enter the correct verification code again.',
//         );
//       }
//       console.log('Error confirming verification code:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Enter Phone Number:</Text>
//       <TextInput
//         style={styles.input}
//         keyboardType="phone-pad"
//         onChangeText={(text) => setPhoneNumber(text)}
//         value={phoneNumber}
//       />

//       {confirmation ? (
//         <>
//           <Text style={styles.label}>Enter OTP:</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             onChangeText={(text) => setOtp(text)}
//             value={otp}
//           />
//           <TouchableOpacity style={styles.button} onPress={confirmCodeHandler}>
//             <Text style={styles.buttonText}>Confirm Code</Text>
//           </TouchableOpacity>
//         </>
//       ) : (
//         <TouchableOpacity style={styles.button} onPress={signInWithPhoneNumber}>
//           <Text style={styles.buttonText}>Send OTP</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   label: {
//     marginBottom: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     width: 200,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: '#3498db',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default PhoneAuthentication;
