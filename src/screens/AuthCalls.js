import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PhoneAuthScreen from './PhoneAuth';
import GoogleSignIn from './GoogleAuth';

const AuthCalls = ({ navigation }) => {
  const handleGoogleSignIn = (userInfo) => {
    console.log('Google Sign-In Success:', userInfo);
    navigation.navigate('BottomTab');
  };

  return (
    <View style={styles.container}>
      <View style={{}}>
        <PhoneAuthScreen />
      </View>
      
      <View style={styles.section}>
      <Text style={{textAlign:'center',top:"55%",fontSize:20,color:'black',fontWeight:'bold',fontStyle:'italic'}}>Or</Text>
        <GoogleSignIn onPress={handleGoogleSignIn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  section: {
    marginVertical: 0,
   
  },
});

export default AuthCalls;
