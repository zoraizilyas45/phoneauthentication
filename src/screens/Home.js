import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  const moveback=()=>{
    navigation.goBack()
  }
 
  return (
    <View>
      <Text>Home</Text>
      <Button title='Back' onPress={moveback}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})