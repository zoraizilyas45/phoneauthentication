import { createStackNavigator } from '@react-navigation/stack';
import AuthCalls from '../screens/AuthCalls';
import PhoneAuthScreen from '../screens/PhoneAuth';
import Home from '../screens/Home';
import GoogleSignIn from '../screens/GoogleAuth';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
    initialRouteName='AuthCalls'>
       <Stack.Screen name="AuthCalls" component={AuthCalls} />
        <Stack.Screen name="PhoneAuthScreen" component={PhoneAuthScreen} />
        <Stack.Screen name="GoogleSignIn" component={GoogleSignIn} />
      <Stack.Screen name="Home" component={Home} />
     
    </Stack.Navigator>
  );
}
export default AppNavigator;