import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PhoneAuthScreen from './src/screens/PhoneAuth'
import PhoneSignIn from './src/screens/PhoneAuth'

const App = () => {
  return (
    <View>
      <PhoneSignIn/>
      {/* <PhoneAuthScreen/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})