import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'; // Add StyleSheet import
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '604966205951-hkfm11e5oao6923b5sti1sn97rgvvlvr.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  try {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    await auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.error('Google Sign-In Error:', error);
  }
}

function GoogleSignIn({ navigation }) {
  return (

    <View>
       <View style={{alignItems:'center'}}>
      <TouchableOpacity style={styles.btn} onPress={() => onGoogleButtonPress().then(() => navigation.navigate('Home'))}>
        <Text style={styles.text}>Google Sign-In</Text>
      </TouchableOpacity>
    </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: "35%",
    backgroundColor: 'purple',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    bottom: 2,
    width:'40%',
    alignContent:'center'
  },
  text: {
    textAlign: 'center',
    top: -2,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 4,
  },
});

export default GoogleSignIn;
