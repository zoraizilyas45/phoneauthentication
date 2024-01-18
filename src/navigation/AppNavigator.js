import { createStackNavigator } from '@react-navigation/stack';
import AuthCalls from '../screens/AuthCalls';
import PhoneAuthScreen from '../screens/PhoneAuth';
import Home from '../screens/Home';
import GoogleSignIn from '../screens/GoogleAuth';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import BottomTabNavigator from './BottomTab';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='AuthCalls'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AuthCalls" component={AuthCalls} />
      <Stack.Screen name="PhoneAuthScreen" component={PhoneAuthScreen} />
      <Stack.Screen name="GoogleSignIn" component={GoogleSignIn} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
