import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PhoneAuthScreen from './PhoneAuth'
import GoogleSignIn from './GoogleAuth'

const AuthCalls = () => {
    const handleGoogleSignIn = (userInfo) => {
        console.log('Google Sign-In Success:', userInfo);
    
        navigation.navigate('Home');}
  return (
    <View>
     <View><PhoneAuthScreen/></View>
     <View><GoogleSignIn onPress={handleGoogleSignIn}/></View>
     
    </View>
  )
}

export default AuthCalls

const styles = StyleSheet.create({})